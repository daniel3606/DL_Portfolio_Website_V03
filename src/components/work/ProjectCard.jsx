import { Link } from 'react-router-dom';
import MiniDan from '../minidan/MiniDan';
import ProjectMedia from '../media/ProjectMedia';
import { Arrow, StatusTag, TechList } from './meta';
import './work.css';

/**
 * The five-second read of a project: plate, name, one line, the fact that sets
 * it apart, and three or four technologies. Everything else is one click away.
 *
 * variant 'feature' — a wide row, plate beside the text (Work page, featured)
 * variant 'card'    — plate above the text (grids)
 */
export default function ProjectCard({ project, variant = 'card', index, eager = false }) {
  const to = `/work/${project.slug}`;
  const label = `${project.name} — ${project.kind}. ${project.summary}`;

  return (
    <article className={`pcard pcard-${variant}`}>
      <Link to={to} className="pcard-link" aria-label={label}>
        <div className="pcard-media">
          <ProjectMedia media={project.cover} theme={project.theme} eager={eager} />
        </div>

        <div className="pcard-body">
          <div className="pcard-top">
            {index !== undefined ? (
              <span className="pcard-index" aria-hidden="true">
                {String(index).padStart(2, '0')}
              </span>
            ) : null}
            <span className="pcard-kind">{project.kind}</span>
            <span className="pcard-year">{project.year}</span>
          </div>

          <h3 className="pcard-name">
            {project.mascot ? <MiniDan pose={project.mascot} px={1} /> : null}
            {project.name}
          </h3>
          <p className="pcard-summary">{project.summary}</p>
          {variant === 'feature' && project.hook ? <p className="pcard-hook">{project.hook}</p> : null}

          <div className="pcard-foot">
            <StatusTag status={project.status} />
            <TechList items={project.tech} />
          </div>

          {variant === 'feature' ? (
            <span className="pcard-cta" aria-hidden="true">
              Read the case study
              <Arrow dir="right" />
            </span>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
