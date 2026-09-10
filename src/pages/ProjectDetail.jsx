import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { projects, getProject } from '../data/projects';
import './ProjectDetail.css';

const Arrow = ({ dir = 'ne' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    {dir === 'ne' ? (
      <path d="M4 12 12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    ) : (
      <path
        d={dir === 'left' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    )}
  </svg>
);

function Section({ section }) {
  return (
    <Reveal className="pd-section" as="section">
      <div className="pd-section-mark">
        <h2 className="h3 pd-section-title">{section.title}</h2>
      </div>

      <div className="pd-section-body">
        {section.kind === 'prose' ? (
          <div className="pd-prose">
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {section.kind === 'bullets' ? (
          <ul className="list-num pd-list">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {section.kind === 'columns' ? (
          <div className="pd-columns">
            {section.items.map((item) => (
              <div className="pd-column" key={item.head}>
                <h3 className="pd-column-head">{item.head}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  // The project's own colour washes the page for as long as you're on it.
  useEffect(() => {
    if (!project) return undefined;
    const root = document.documentElement;
    const paint = () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      root.style.setProperty('--wash', dark ? project.tintDark : project.tint);
    };
    paint();
    const observer = new MutationObserver(paint);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      observer.disconnect();
      root.style.setProperty('--wash', 'transparent');
    };
  }, [project]);

  if (!project) return <Navigate to="/work" replace />;

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];

  const style = { '--tint': project.tint, '--tint-dark': project.tintDark };
  const deviceShots =
    project.gallery?.items?.length && project.gallery.kind !== 'wide' ? project.gallery.items : null;
  const wideShots = project.gallery?.kind === 'wide' ? project.gallery.items : project.gallery?.wide || null;

  return (
    <main className="pd page-top" style={style}>
      {/* Masthead ------------------------------------------------------ */}
      <header className="shell pd-head">
        <Link to="/work" className="pd-back label">
          <Arrow dir="left" />
          Index
        </Link>

        <div className="pd-disciplines">
          {project.discipline.map((d, i) => (
            <span className="label label-ink" key={d}>
              {i > 0 ? <i className="sep" aria-hidden="true" /> : null}
              {d}
            </span>
          ))}
          <span className="label pd-year">
            {project.status}
            <i className="sep" aria-hidden="true" />
            {project.year}
          </span>
        </div>

        <h1 className="display pd-title">{project.name}</h1>

        <div className="pd-head-foot">
          <p className="pd-tagline">{project.tagline}</p>
          {project.links.length ? (
            <div className="pd-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {link.label}
                  <Arrow />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {/* Hero ---------------------------------------------------------- */}
      <Reveal className={`pd-hero pd-hero-${project.coverMode}`}>
        <div className="pd-hero-frame">
          {project.cover ? (
            <img src={project.cover} alt={`${project.name} preview`} loading="eager" />
          ) : (
            <span className="pd-hero-word" aria-hidden="true">
              {project.name}
            </span>
          )}
        </div>
      </Reveal>

      <div className="shell">
        {/* Facts ------------------------------------------------------- */}
        <Reveal className="pd-facts">
          {project.meta.map((m) => (
            <div className="pd-fact" key={m.label}>
              <span className="label">{m.label}</span>
              <p className="pd-fact-value">{m.value}</p>
            </div>
          ))}
        </Reveal>

        {/* Overview ---------------------------------------------------- */}
        <Reveal className="pd-overview">
          <p>{project.overview}</p>
        </Reveal>

        {/* Metrics ----------------------------------------------------- */}
        {project.metrics?.length ? (
          <Reveal className="pd-metrics">
            {project.metrics.map((m) => (
              <div className="pd-metric" key={m.label}>
                <strong>{m.value}</strong>
                <span className="label">{m.label}</span>
              </div>
            ))}
          </Reveal>
        ) : null}

        {/* Body -------------------------------------------------------- */}
        <div className="pd-body">
          {project.sections.map((section) => (
            <Section section={section} key={section.title} />
          ))}
        </div>
      </div>

      {/* Galleries ------------------------------------------------------ */}
      {wideShots?.length ? (
        <div className="pd-gallery-wide">
          {wideShots.map((shot) => (
            <Reveal className="pd-wide-shot" key={shot.src}>
              <div className="pd-wide-frame">
                <img src={shot.src} alt={shot.caption} loading="lazy" />
              </div>
              <p className="label pd-caption">{shot.caption}</p>
            </Reveal>
          ))}
        </div>
      ) : null}

      {deviceShots?.length ? (
        <div className="shell pd-gallery-device">
          <Reveal className="pd-device-row">
            {deviceShots.map((shot) => (
              <figure className="pd-device" key={shot.src}>
                <div className="pd-device-frame">
                  <img src={shot.src} alt={shot.caption} loading="lazy" />
                </div>
                <figcaption className="label pd-caption">{shot.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      ) : null}

      {/* Pager ---------------------------------------------------------- */}
      <nav className="shell pd-pager" aria-label="More projects">
        <Link to={`/work/${prev.slug}`} className="pd-pager-link">
          <span className="label pd-pager-label">
            <Arrow dir="left" />
            Previous
          </span>
          <span className="h3 pd-pager-name">{prev.name}</span>
        </Link>
        <Link to={`/work/${next.slug}`} className="pd-pager-link pd-pager-next">
          <span className="label pd-pager-label">
            Next
            <Arrow dir="right" />
          </span>
          <span className="h3 pd-pager-name">{next.name}</span>
        </Link>
      </nav>
    </main>
  );
}
