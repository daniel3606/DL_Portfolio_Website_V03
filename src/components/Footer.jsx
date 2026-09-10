import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-lead">
            <span className="label">Currently</span>
            <p className="footer-status">
              Studying at Michigan, building{' '}
              <a className="footer-link-accent" href="https://www.themarshmallow.app" target="_blank" rel="noreferrer">
                Marshmallow
              </a>
              , and always up for a coffee chat.
            </p>
            <a className="footer-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="label">Site</span>
              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <span className="label">Elsewhere</span>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Resume PDF
              </a>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span className="label">
            © {year} {profile.name}
          </span>
          <span className="label">{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
