import { profile } from '../data/profile';
import './Footer.css';

/**
 * A contact line, not a sitemap. The nav already lists every page, so
 * repeating it here only buried the one thing a visitor comes down for.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <a className="footer-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="footer-links">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="footer-base">
          <span className="label">
            {profile.name} — {year}
          </span>
          <span className="label">{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
