import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/work/ProjectCard';
import LabList from '../components/work/LabList';
import { featured, more, labProjects } from '../data/projects';
import './Work.css';

/**
 * Three tiers, in descending order of how much they ask of a visitor:
 * featured work gets a wide row and a full case study, more work gets a card
 * and a shorter study, and the lab gets a line.
 */
export default function Work() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Work — Daniel Lim';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="work-page page-top">
      <div className="shell">
        <header className="work-head">
          <h1 className="h1 work-title">Work</h1>
          <p className="work-lede">
            Products I have designed, built and shipped — two on the App Store, one open-source macOS app, and the
            experiments in between. The larger ones open into case studies that go from the product down to the code.
          </p>
        </header>

        <section className="work-tier" aria-labelledby="tier-featured">
          <div className="work-tier-head">
            <h2 className="eyebrow" id="tier-featured">
              Featured
            </h2>
            <span className="label">{featured.length} projects</span>
          </div>
          <div className="work-featured">
            {featured.map((project, i) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} variant="feature" index={i + 1} eager={i === 0} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="work-tier" aria-labelledby="tier-more">
          <div className="work-tier-head">
            <h2 className="eyebrow" id="tier-more">
              More projects
            </h2>
            <span className="label">{more.length} projects</span>
          </div>
          <div className="work-grid">
            {more.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="work-tier" aria-labelledby="tier-lab">
          <div className="work-tier-head work-tier-head-plain">
            <h2 className="eyebrow" id="tier-lab">
              Experiments
            </h2>
            <span className="label">{labProjects.length} builds</span>
          </div>
          <Reveal>
            <LabList items={labProjects} />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
