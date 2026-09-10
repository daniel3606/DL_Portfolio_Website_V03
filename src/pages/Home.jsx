import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import WorkIndex from '../components/WorkIndex';
import Marquee from '../components/Marquee';
import { profile, disciplines, experience } from '../data/profile';
import { projects } from '../data/projects';
import headshot from '../assets/brand/headshot.jpg';
import './Home.css';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 12 12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

const TICKER = [
  'React Native',
  'TypeScript',
  'Product spec',
  'Firebase',
  'PostgreSQL',
  'Swift',
  'Next.js',
  'Figma',
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="home">
      {/* Hero ------------------------------------------------------------ */}
      <section className="hero">
        <div className="shell">
          <div className="hero-rail">
            <span className="label">{profile.location}</span>
            <span className="label">CS at Michigan, UX minor</span>
            <span className="label label-ink hero-avail">{profile.availability}</span>
          </div>

          <h1 className="display hero-title">
            <span className="hero-line">I build mobile</span>
            <span className="hero-line">and web products,</span>
            <span className="hero-line">end to end.</span>
          </h1>

          <div className="hero-foot">
            <p className="hero-note">
              Software engineer and product-minded builder. Most recently a mobile engineering intern at SPAN,
              shipping React Native to production. Currently building Marshmallow.
            </p>
            <div className="hero-cta">
              <Link to="/work" className="btn btn-primary">
                Selected work
                <Arrow />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={TICKER} />

      {/* Statement ------------------------------------------------------- */}
      <section className="section-tight statement">
        <div className="shell statement-grid">
          <Reveal className="statement-figure">
            <div className="portrait">
              <img src={headshot} alt={`${profile.name} portrait`} loading="lazy" />
            </div>
          </Reveal>

          <Reveal className="statement-copy" delay={0.1}>
            <span className="eyebrow">Introduction</span>
            <h2 className="h2 statement-title">
              I write the spec, then I ship the thing.
            </h2>
            <p className="statement-body">{profile.intro}</p>
            <Link to="/about" className="link statement-link">
              More about how I work
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Practice -------------------------------------------------------- */}
      <section className="section-tight practice">
        <div className="shell">
          <Reveal className="head">
            <span className="eyebrow">Practice</span>
            <h2 className="h2 head-title">What I&rsquo;m good at.</h2>
          </Reveal>

          <div className="practice-grid">
            {disciplines.map((d, i) => (
              <Reveal className="practice-col" key={d.key} delay={i * 0.09}>
                <h3 className="h3 practice-title">{d.title}</h3>
                <p className="practice-line">{d.line}</p>
                <p className="practice-body">{d.body}</p>
                <div className="tag-row practice-tags">
                  {d.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work ------------------------------------------------------------ */}
      <section className="section work">
        <div className="shell">
          <Reveal className="head">
            <span className="eyebrow">Selected work</span>
            <div className="head-row">
              <h2 className="h2 head-title">Things I&rsquo;ve shipped.</h2>
              <Link to="/work" className="link">
                All {projects.length} projects
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <WorkIndex projects={featured} />
          </Reveal>
        </div>
      </section>

      {/* Experience ------------------------------------------------------ */}
      <section className="section-tight experience">
        <div className="shell">
          <Reveal className="head">
            <span className="eyebrow">Experience</span>
            <h2 className="h2 head-title">Where I&rsquo;ve been building.</h2>
          </Reveal>

          <div className="exp-list">
            {experience.map((role, i) => (
              <Reveal className="exp-row" key={role.org} delay={i * 0.07}>
                <div className="exp-when">
                  <span className="label label-ink">{role.period}</span>
                  <span className="label">{role.place}</span>
                </div>
                <div className="exp-what">
                  <h3 className="h3 exp-role">{role.role}</h3>
                  <p className="exp-org">{role.org}</p>
                  <ul className="list-dash exp-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing --------------------------------------------------------- */}
      <section className="closing">
        <div className="shell closing-inner">
          <Reveal>
            <h2 className="display closing-title">
              Always up for
              <br />
              a coffee chat.
            </h2>
            <div className="closing-foot">
              <p className="closing-note">
                Engineering and product roles, or anything that needs someone who can hold both halves. If you just
                want to compare notes on shipping mobile, that works too.
              </p>
              <div className="closing-cta">
                <Link to="/contact" className="btn btn-primary">
                  Start a conversation
                  <Arrow />
                </Link>
                <a className="btn btn-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
