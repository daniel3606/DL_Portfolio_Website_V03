import { Link } from 'react-router-dom';
import ProjectMedia from '../media/ProjectMedia';
import MiniDan from '../minidan/MiniDan';
import { Arrow } from './meta';
import './explainer.css';

/**
 * A featured project on the home page: the plate on one side, MiniDan on the
 * other telling you what it is. The bubble is the project's own summary —
 * the character only delivers it, it never adds claims of its own.
 */
export default function ProjectExplainer({ project, index, flip = false, eager = false }) {
  const to = `/work/${project.slug}`;

  return (
    <article className={`px ${flip ? 'px-flip' : ''}`}>
      <Link to={to} className="px-media" tabIndex={-1} aria-hidden="true">
        <ProjectMedia media={project.cover} theme={project.theme} eager={eager} />
      </Link>

      <div className="px-body">
        <span className="px-index label">{String(index).padStart(2, '0')}</span>
        <h3 className="px-name">
          <Link to={to}>{project.name}</Link>
        </h3>
        <p className="px-meta label">
          {project.kind} · {project.year} · <span className="px-status">{project.status?.label}</span>
        </p>

        <div className="px-say">
          <MiniDan pose={project.mascot || 'idle'} px={5} animate style={{ '--md-delay': `${-index * 0.7}s` }} />
          <p className="md-say">{project.summary}</p>
        </div>

        <ul className="px-tech label" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link to={to} className="px-cta label">
          Read the case study <Arrow dir="right" />
        </Link>
      </div>
    </article>
  );
}
