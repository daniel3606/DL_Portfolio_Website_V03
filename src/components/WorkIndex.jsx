import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkIndex.css';

/**
 * The project index: numbered editorial rows. On a pointer device, hovering a
 * row floats that project's cover alongside the cursor; on touch and at narrow
 * widths the cover sits inline in the row instead.
 */
export default function WorkIndex({ projects, startAt = 1 }) {
  const wrapRef = useRef(null);
  const floatRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  const frame = useRef(0);
  const [active, setActive] = useState(null);
  const [floats, setFloats] = useState(false);

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

  // Only run the follow behavior where a real pointer can hover.
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 861px)');
    const sync = () => setFloats(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!floats) return undefined;

    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const onMove = (event) => {
      const rect = wrap.getBoundingClientRect();
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
    };

    // Trail the cursor rather than pinning to it — the lag is the character.
    const tick = () => {
      const p = pointer.current;
      p.cx += (p.x - p.cx) * 0.12;
      p.cy += (p.y - p.cy) * 0.12;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0) translate(-50%, -50%)`;
      }
      frame.current = requestAnimationFrame(tick);
    };

    wrap.addEventListener('pointermove', onMove);
    frame.current = requestAnimationFrame(tick);

    return () => {
      wrap.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame.current);
    };
  }, [floats]);

  return (
    <div className={`windex ${floats ? 'windex-floats' : ''}`} ref={wrapRef}>
      {floats ? (
        <div className={`windex-float ${active !== null ? 'is-on' : ''}`} ref={floatRef} aria-hidden="true">
          {projects.map((project, i) => (
            <div
              className={`windex-float-item ${active === i ? 'is-on' : ''}`}
              key={project.slug}
              style={{ background: project.tint }}
            >
              {project.cover ? (
                <img src={project.cover} alt="" loading="lazy" />
              ) : (
                <span className="windex-float-word">{project.name}</span>
              )}
            </div>
          ))}
        </div>
      ) : null}

      <ol className="windex-list">
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

              <span className="windex-main">
                <span className="windex-name">{project.name}</span>
                <span className="windex-tagline">{project.tagline}</span>
              </span>

              {!floats ? (
                <span className="windex-thumb" style={{ background: project.tint }}>
                  {project.cover ? (
                    <img src={project.cover} alt={`${project.name} preview`} loading="lazy" />
                  ) : (
                    <span className="windex-thumb-word">{project.name}</span>
                  )}
                </span>
              ) : null}

              <span className="windex-meta">
                <span className="windex-disciplines">
                  {project.discipline.map((d, j) => (
                    <span key={d}>
                      {j > 0 ? <i className="sep" aria-hidden="true" /> : null}
                      {d}
                    </span>
                  ))}
                </span>
                <span className="windex-year">{project.year}</span>
              </span>

              <span className="windex-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M6.5 15.5 15.5 6.5M15.5 6.5H8M15.5 6.5V14"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
