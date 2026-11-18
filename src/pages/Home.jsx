import { Link } from 'react-router-dom';
import Fishing from '../components/Fishing';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/work/ProjectCard';
import { Arrow } from '../components/work/meta';
import { featured, caseStudies, labProjects } from '../data/projects';
import './Home.css';

/**
 * The home page is the lake, then the work. One sentence sits between them so
 * a visitor who skims knows what kind of engineer this is before the first
 * card; everything else is on the project pages.
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
            <span className="eyebrow">Selected work</span>
            <Link to="/work" className="index-all">
              All {total} projects
              <Arrow />
            </Link>
          </div>

          <Reveal>
            <h2 className="home-statement" id="home-work-title">
              I build and ship software end to end, from native apps to the backends behind them.
            </h2>
          </Reveal>

          <div className="home-grid">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>

          <Reveal className="home-more">
            <Link to="/work" className="btn btn-secondary">
              See every project, including the experiments
              <Arrow dir="right" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
