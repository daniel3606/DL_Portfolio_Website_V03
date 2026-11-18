import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import MiniDan from '../components/minidan/MiniDan';
import Reveal from '../components/Reveal';
import ProjectMedia from '../components/media/ProjectMedia';
import Gallery from '../components/case/Gallery';
import Architecture from '../components/case/Architecture';
import CodeExcerpt from '../components/case/CodeExcerpt';
import { Arrow, StatusTag, TechList, ProjectLinks } from '../components/work/meta';
import { caseStudies, getProject } from '../data/projects';
import './ProjectDetail.css';

/**
 * One template, three depths. The head and hero are the five-second read; the
 * overview, features and screens are the minute-long one; everything under
 * "Engineering" is for the reader who wants to know how it works.
 */

function Block({ id, label, title, children, className = '' }) {
  return (
    <Reveal as="section" className={`cs-block ${className}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="cs-block-mark">
        {label ? <span className="label">{label}</span> : null}
        <h2 className="h3 cs-block-title" id={`${id}-title`}>
          {title}
        </h2>
      </div>
      <div className="cs-block-body">{children}</div>
    </Reveal>
  );
}

function useDocumentMeta(project) {
  useEffect(() => {
    if (!project) return undefined;
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content');
    document.title = `${project.name} — Daniel Lim`;
    meta?.setAttribute('content', `${project.name}: ${project.summary}`);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, [project]);
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  useDocumentMeta(project);

  if (!project) return <Navigate to="/work" replace />;

  const index = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];

  const hasEngineering = Boolean(
    project.stack || project.architecture || project.challenges?.length || project.code || project.process
  );

  const toc = [
    { id: 'overview', label: 'Overview' },
    project.features?.length && { id: 'product', label: 'Product' },
    project.gallery?.length && { id: 'screens', label: 'Screens' },
    hasEngineering && { id: 'engineering', label: 'Engineering' },
    project.outcome && { id: 'outcome', label: 'Outcome' },
  ].filter(Boolean);

  return (
    <main className="cs page-top">
      {/* Head ------------------------------------------------------------ */}
      <header className="shell cs-head">
        <div className="cs-crumbs">
          <Link to="/work" className="cs-back label">
            <Arrow dir="left" />
            All work
          </Link>
          <span className="label cs-kind">
            {project.kind}
            <i className="sep" aria-hidden="true" />
            {project.period || project.year}
          </span>
        </div>

        <div className="cs-title-row">
          <h1 className="display cs-title">{project.name}</h1>
          {project.mascot ? <MiniDan pose={project.mascot} px={8} animate className="cs-mascot" /> : null}
        </div>

        <div className="cs-head-foot">
          <p className="cs-summary">{project.summary}</p>
          <div className="cs-head-side">
            <div className="cs-head-meta">
              <StatusTag status={project.status} />
              <TechList items={project.tech} />
            </div>
            <ProjectLinks links={project.links} note={project.repoNote} />
          </div>
        </div>
      </header>

      {/* Hero ------------------------------------------------------------ */}
      <div className="shell cs-hero">
        <ProjectMedia
          media={project.hero || project.cover}
          theme={project.theme}
          ratio="hero"
          eager
          label={`${project.name} — product preview`}
        />
      </div>

      <div className="shell">
        {/* Facts --------------------------------------------------------- */}
        {project.facts?.length ? (
          <dl className="cs-facts">
            {project.facts.map((f) => (
              <div className="cs-fact" key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {/* On this page -------------------------------------------------- */}
        <nav className="cs-toc" aria-label="On this page">
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`}>
              {t.label}
            </a>
          ))}
        </nav>

        {/* Level 2 — Overview -------------------------------------------- */}
        <Reveal as="section" className="cs-overview" id="overview" aria-label="Overview">
          {[
            ['Problem', 'confused', project.overview.problem],
            ['What I built', 'idea', project.overview.solution],
            ['My role', 'determined', project.overview.role],
          ].map(([label, pose, text], i) => (
            <div className="cs-ov-item" key={label}>
              <span className="cs-ov-head">
                <MiniDan pose={pose} px={4} animate style={{ '--md-delay': `${-i * 0.9}s` }} />
                <span className="label">{label}</span>
              </span>
              <p className="md-say md-say--up">{text}</p>
            </div>
          ))}
        </Reveal>

        {project.numbers?.length ? (
          <Reveal className="cs-numbers">
            {project.numbers.map((n) => (
              <div className="cs-number" key={n.label}>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </div>
            ))}
          </Reveal>
        ) : null}

        {project.features?.length ? (
          <Block id="product" label="Product" title="What it does">
            <div className="cs-features">
              {project.features.map((f) => (
                <div className="cs-feature" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Block>
        ) : null}
      </div>

      {project.gallery?.length ? (
        <section className="shell cs-screens" id="screens" aria-label="Screens">
          <Gallery items={project.gallery} theme={project.theme} />
        </section>
      ) : null}

      {/* Level 3 — Engineering ------------------------------------------- */}
      {hasEngineering ? (
        <div className="shell" id="engineering">
          <Reveal className="cs-divider">
            <span className="eyebrow">Engineering</span>
            <p>How it works, what was hard, and how it was built.</p>
          </Reveal>

          {project.architecture ? (
            <Block id="architecture" label="System" title="Architecture">
              <Architecture architecture={project.architecture} />
            </Block>
          ) : null}

          {project.challenges?.length ? (
            <Block id="challenges" label="Problems worth solving" title="Engineering challenges">
              <ol className="cs-challenges">
                {project.challenges.map((c, i) => (
                  <li className="cs-challenge" key={c.title}>
                    <span className="cs-challenge-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{c.title}</h3>
                      <dl>
                        <dt className="label cs-ch-label">
                          <MiniDan pose="surprised" px={2.5} />
                          Problem
                        </dt>
                        <dd>{c.problem}</dd>
                        <dt className="label cs-ch-label">
                          <MiniDan pose="passed" px={2.5} />
                          Approach
                        </dt>
                        <dd>{c.solution}</dd>
                      </dl>
                      {c.where ? <p className="cs-where">{c.where}</p> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </Block>
          ) : null}

          {project.code ? (
            <Block id="code" label="From the source" title={project.code.title}>
              <CodeExcerpt code={project.code} />
            </Block>
          ) : null}

          {project.stack?.length ? (
            <Block id="stack" label="Stack" title="Built with">
              <dl className="cs-stack">
                {project.stack.map((s) => (
                  <div key={s.group}>
                    <dt className="label">{s.group}</dt>
                    <dd>
                      <TechList items={s.items} className="cs-stack-list" />
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>
          ) : null}

          {project.process?.length ? (
            <Block id="process" label="Process" title="How it was built">
              <div className="cs-prose">
                {project.process.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Block>
          ) : null}
        </div>
      ) : null}

      {/* Outcome ---------------------------------------------------------- */}
      {project.outcome ? (
        <div className="shell">
          <Block id="outcome" label="Where it stands" title="Outcome" className="cs-outcome">
            <p className="cs-now">{project.outcome.now}</p>
            <div className="cs-outcome-cols">
              {project.outcome.lessons?.length ? (
                <div>
                  <span className="label">What I learned</span>
                  <ul className="list-dash">
                    {project.outcome.lessons.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.outcome.next?.length ? (
                <div>
                  <span className="label">Next</span>
                  <ul className="list-dash">
                    {project.outcome.next.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Block>
        </div>
      ) : null}

      {/* Pager ------------------------------------------------------------ */}
      <nav className="shell cs-pager" aria-label="More projects">
        <Link to={`/work/${prev.slug}`} className="cs-pager-prev">
          <span className="label">
            <Arrow dir="left" /> Previous
          </span>
          <span className="cs-pager-name">{prev.name}</span>
        </Link>
        <Link to={`/work/${next.slug}`} className="cs-pager-next">
          <div className="cs-pager-media">
            <ProjectMedia media={next.cover} theme={next.theme} />
          </div>
          <div className="cs-pager-text">
            <span className="label">
              Next project <Arrow dir="right" />
            </span>
            <span className="cs-pager-name">{next.name}</span>
            <span className="cs-pager-summary">{next.summary}</span>
          </div>
        </Link>
      </nav>
    </main>
  );
}
