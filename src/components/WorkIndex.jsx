import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkIndex.css';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 12 12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
  </svg>
);

/**
 * The project index: numbered rows carrying a cover, a name, its disciplines
 * and a year — and nothing else. Taglines used to live here and now live on
 * the project page, which is the only place with room to earn them.
 *
 * The cover sits inline on every row rather than floating with the cursor, so
 * the same information is there on a phone, under a keyboard, and for anyone
 * who never hovers.
 */
export default function WorkIndex({ projects, startAt = 1 }) {
  const [active, setActive] = useState(null);

  // Paint the hovered project's tint behind the page, and clear it on unmount
  // so the wash never outlives the index.
  useEffect(() => {
    const root = document.documentElement;
    const theme = root.getAttribute('data-theme');
    const project = active === null ? null : projects[active];
    const tint = project ? (theme === 'dark' ? project.tintDark : project.tint) : null;
    root.style.setProperty('--wash', tint || 'transparent');
    return () => root.style.setProperty('--wash', 'transparent');
  }, [active, projects]);

  return (
    <ol className="windex">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Link
            to={`/work/${project.slug}`}
            className={`windex-row ${active !== null && active !== i ? 'is-dimmed' : ''}`}
            onPointerEnter={() => setActive(i)}
            onPointerLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
          >
            <span className="windex-num" aria-hidden="true">
              {String(startAt + i).padStart(2, '0')}
            </span>

            <span
              className={`windex-thumb windex-thumb-${project.coverMode}`}
              style={{ '--tile': project.tint, '--tile-dark': project.tintDark }}
            >
              {project.cover ? (
                <img src={project.cover} alt="" loading="lazy" />
              ) : (
                <span className="windex-thumb-word">{project.name.split(' ')[0]}</span>
              )}
            </span>

            <span className="windex-name">{project.name}</span>

            <span className="windex-disc">
              {project.discipline.map((d, j) => (
                <span key={d}>
                  {j > 0 ? <i className="sep" aria-hidden="true" /> : null}
                  {d}
                </span>
              ))}
            </span>

            <span className="windex-year">{project.year}</span>

            <span className="windex-arrow" aria-hidden="true">
              <Arrow />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
