import { Link } from 'react-router-dom';
import Fishing from '../components/Fishing';
import Reveal from '../components/Reveal';
import MiniDan from '../components/minidan/MiniDan';
import ProjectExplainer from '../components/work/ProjectExplainer';
import { Arrow } from '../components/work/meta';
import { featured, caseStudies, labProjects } from '../data/projects';
import { profile } from '../data/profile';
import './Home.css';

/**
 * The lake, then the work, then a way to say hi. MiniDan fishes in the lake
 * and explains each featured project in his own speech bubble.
 */
export default function Home() {
  const total = caseStudies.length + labProjects.length;

  return (
    <main className="home">
      {/* The scene writes the name in the sky itself, so there is no heading
          over it. The page still needs one for its outline and for anyone
          who never sees the art. */}
      <section className="hero" aria-label="Daniel Lim — portfolio">
        <div className="shell">
          <h1 className="hero-sr">Daniel Lim, software engineer</h1>
          <Fishing />
        </div>
      </section>

      <section className="home-work" aria-labelledby="home-work-title">
        <div className="shell">
          <div className="index-head">
            <span className="index-label">
              <MiniDan pose="typing" px={1.5} />
              <span className="eyebrow">Selected work</span>
            </span>
            <Link to="/work" className="index-all">
              All {total} projects
              <Arrow dir="right" />
            </Link>
          </div>

          <Reveal>
            <h2 className="home-statement" id="home-work-title">
              I build and ship software end to end, from native apps to the backends behind them.
            </h2>
          </Reveal>

          <div className="home-list">
            {featured.map((project, i) => (
              <Reveal key={project.slug}>
                <ProjectExplainer project={project} index={i + 1} flip={i % 2 === 1} eager={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal className="home-more">
            <Link to="/work" className="home-more-link">
              <MiniDan pose="walk" px={1.5} animate />
              See every project, including the experiments
              <Arrow dir="right" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-hi" aria-labelledby="home-hi-title">
        <div className="shell home-hi-inner">
          <div>
            <h2 className="home-hi-title" id="home-hi-title">
              Say hi.
            </h2>
            <a className="home-hi-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="home-hi-md">
            <p className="md-say md-say--right">{profile.availability}.</p>
            <MiniDan pose="laughing" px={3} animate />
          </div>
        </div>
      </section>
    </main>
  );
}
