import Reveal from '../components/Reveal';
import { profile, education } from '../data/profile';
import { resumeExperience, resumeSkills, resumeProjects, resumeLeadership } from '../data/resume';
import './Resume.css';

export default function Resume() {
  // Save as PDF goes through the browser so the printed sheet always matches
  // what is on screen, rather than a file that drifts out of date.
  const handlePrint = () => window.print();

  return (
    <main className="resume page-top">
      <div className="shell">
        <header className="resume-head">
          <div>
            <span className="eyebrow">Resume</span>
            <h1 className="h1 resume-title">The short version.</h1>
            <p className="lede resume-lede">
              Read it here, print it, or download the PDF.
            </p>
          </div>

          <div className="resume-actions">
            <button className="btn btn-primary" onClick={handlePrint}>
              Print / Save as PDF
            </button>
            <a className="btn btn-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download PDF
            </a>
          </div>
        </header>
      </div>

      <div className="shell-text">
        <Reveal className="sheet">
          {/* Identity ------------------------------------------------ */}
          <div className="sheet-id">
            <h2 className="sheet-name">{profile.name}</h2>
            <div className="sheet-contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <i className="sep" aria-hidden="true" />
              <a href="https://daniellimportfolio.com" target="_blank" rel="noreferrer">
                daniellimportfolio.com
              </a>
              <i className="sep" aria-hidden="true" />
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/daniel-lim0306
              </a>
              <i className="sep" aria-hidden="true" />
              <a href={profile.socials.github} target="_blank" rel="noreferrer">
                github.com/daniel3606
              </a>
            </div>
          </div>

          {/* Education ----------------------------------------------- */}
          <section className="sheet-section">
            <h3 className="label sheet-heading">Education</h3>
            <div className="sheet-body">
              <div className="entry">
                <div className="entry-head">
                  <p className="entry-org">{education.school}</p>
                  <p className="label entry-when">{education.period}</p>
                </div>
                <div className="entry-head">
                  <p className="entry-role">{education.detail}</p>
                  <p className="label entry-where">{education.place}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills -------------------------------------------------- */}
          <section className="sheet-section">
            <h3 className="label sheet-heading">Technical Skills</h3>
            <div className="sheet-body sheet-skills">
              {resumeSkills.map((group) => (
                <div className="skill-line" key={group.group}>
                  <p className="label skill-label">{group.group}</p>
                  <p className="skill-items">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience ---------------------------------------------- */}
          <section className="sheet-section">
            <h3 className="label sheet-heading">Experience</h3>
            <div className="sheet-body">
              {resumeExperience.map((role) => (
                <div className="entry" key={role.org}>
                  <div className="entry-head">
                    <p className="entry-org">{role.org}</p>
                    <p className="label entry-when">{role.period}</p>
                  </div>
                  <div className="entry-head">
                    <p className="entry-role">{role.role}</p>
                    <p className="label entry-where">{role.place}</p>
                  </div>
                  <ul className="entry-points">
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects ------------------------------------------------ */}
          <section className="sheet-section">
            <h3 className="label sheet-heading">Projects</h3>
            <div className="sheet-body">
              {resumeProjects.map((project) => (
                <div className="entry" key={project.name}>
                  <div className="entry-head">
                    <p className="entry-org">{project.name}</p>
                    <p className="label entry-when">{project.period}</p>
                  </div>
                  <div className="entry-head">
                    <p className="entry-role">{project.role}</p>
                    <p className="label entry-where">{project.stack}</p>
                  </div>
                  <ul className="entry-points">
                    {project.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership ---------------------------------------------- */}
          <section className="sheet-section sheet-section-last">
            <h3 className="label sheet-heading">Leadership</h3>
            <div className="sheet-body">
              {resumeLeadership.map((role) => (
                <div className="entry" key={role.org}>
                  <div className="entry-head">
                    <p className="entry-org">{role.org}</p>
                    <p className="label entry-when">{role.period}</p>
                  </div>
                  <div className="entry-head">
                    <p className="entry-role">{role.role}</p>
                    <p className="label entry-where">{role.place}</p>
                  </div>
                  <ul className="entry-points">
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </Reveal>
      </div>
    </main>
  );
}
