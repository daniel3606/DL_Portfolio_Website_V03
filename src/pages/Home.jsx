import { Link } from 'react-router-dom';
import Fishing from '../components/Fishing';
import Reveal from '../components/Reveal';
import WorkIndex from '../components/WorkIndex';
import { projects } from '../data/projects';
import './Home.css';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 12 12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
  </svg>
);

/**
 * The home page is an index, not an introduction. The lake carries the name
 * and the first impression; everything a visitor would read about a project —
 * or about me — lives on the page that can actually carry it.
 */
export default function Home() {
  const featured = projects.filter((p) => p.featured);

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

      <section className="home-work">
        <div className="shell">
          <div className="index-head">
            <span className="eyebrow">Selected work</span>
            <Link to="/work" className="index-all">
              All {projects.length} projects
              <Arrow />
            </Link>
          </div>

          <Reveal>
            <WorkIndex projects={featured} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
