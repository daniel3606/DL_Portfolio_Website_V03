import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { profile, disciplines, education, skills } from '../data/profile';
import headshot from '../assets/brand/headshot.jpeg';
import './About.css';

/* A real sequence, so it earns its numbering. */
const PROCESS = [
  { step: 'Define', body: 'Problem, user, scope, success metric, and what this deliberately will not do.' },
  { step: 'Design', body: 'Figma at real fidelity, including the states that break things — empty, loading, error.' },
  { step: 'Build', body: 'TypeScript across web and native, schema-first, access control at the database.' },
  { step: 'Refine', body: 'Watch real usage, cut what nobody touches, fix what only breaks on device.' },
];

const FACTS = [
  { k: 'Studying', v: 'B.S.E. Computer Science, UX minor' },
  { k: 'Graduating', v: 'December 2027' },
  { k: 'Based in', v: 'Ann Arbor, Michigan' },
  { k: 'Looking for', v: 'Engineering and product roles' },
];

export default function About() {
  return (
    <main className="about page-top">
      <div className="shell">
        <header className="about-head">
          <Reveal className="about-head-grid">
            <div>
              <span className="eyebrow">About</span>
              <h1 className="h1 about-title">I Design, Build, and Ship.</h1>
              <p className="lede about-lede">{profile.intro}</p>
            </div>

            <div className="about-portrait">
              <img src={headshot} alt={`${profile.name} portrait`} loading="lazy" />
            </div>
          </Reveal>
        </header>

        {/* Facts ---------------------------------------------------- */}
        <Reveal className="fact-strip">
          {FACTS.map((f) => (
            <div className="fact" key={f.k}>
              <span className="label">{f.k}</span>
              <p className="fact-value">{f.v}</p>
            </div>
          ))}
        </Reveal>

        {/* Process -------------------------------------------------- */}
        <section className="about-block">
          <Reveal className="head">
            <span className="eyebrow">Process</span>
            <h2 className="h2 head-title">How the work gets made.</h2>
          </Reveal>

          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <Reveal className="process-step" key={p.step} delay={i * 0.06}>
                <span className="label process-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3 process-name">{p.step}</h3>
                <p className="process-body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Capabilities --------------------------------------------- */}
        <section className="about-block">
          <Reveal className="head">
            <span className="eyebrow">Capabilities</span>
            <h2 className="h2 head-title">What I bring to a team.</h2>
          </Reveal>

          <div className="cap-list">
            {disciplines.map((d, i) => (
              <Reveal className="cap-row" key={d.key} delay={i * 0.06}>
                <div className="cap-head">
                  <h3 className="h3 cap-title">{d.title}</h3>
                  <p className="label cap-line">{d.line}</p>
                </div>
                <div className="cap-detail">
                  <p className="cap-body">{d.body}</p>
                  <div className="tag-row">
                    {d.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education & toolkit -------------------------------------- */}
        <section className="about-block about-edu">
          <Reveal className="edu-card">
            <span className="eyebrow">Education</span>
            <h3 className="h3 edu-school">{education.school}</h3>
            <p className="edu-detail">{education.detail}</p>
            <p className="label edu-period">
              {education.period}
              <i className="sep" aria-hidden="true" />
              {education.place}
            </p>
          </Reveal>

          <Reveal className="skills-card" delay={0.08}>
            <span className="eyebrow">Toolkit</span>
            <div className="skills-groups">
              {skills.map((group) => (
                <div className="skills-group" key={group.group}>
                  <p className="skills-group-name">{group.group}</p>
                  <p className="skills-items">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="about-cta">
          <h2 className="h2">Want the short version?</h2>
          <div className="about-cta-row">
            <Link to="/resume" className="btn btn-primary">
              Read the resume
            </Link>
            <Link to="/work" className="btn btn-secondary">
              See the work
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
