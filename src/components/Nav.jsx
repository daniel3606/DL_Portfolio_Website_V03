import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { caseStudies, labProjects } from '../data/projects';
import MiniDan from './minidan/MiniDan';
import './Nav.css';

const LINKS = [
  { to: '/work', label: 'Work', count: caseStudies.length + labProjects.length },
  { to: '/work#lab', label: 'Lab' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light';
    const stored = document.documentElement.getAttribute('data-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('dl-theme', theme);
    } catch {
      /* storage can be unavailable in private windows */
    }
  }, [theme]);

  return [theme, setTheme];
}

/* "Lab" is a section of the Work page, so it is only current when the URL
   says so; Work is current everywhere else under /work. */
function useCurrent() {
  const { pathname, hash } = useLocation();
  return (to) => {
    const [path, h] = to.split('#');
    if (h) return pathname === path && hash === `#${h}`;
    if (path === '/work') return pathname.startsWith('/work') && hash !== '#lab';
    return pathname === path;
  };
}

function Links({ className, onPick }) {
  const isCurrent = useCurrent();
  return (
    <nav className={className} aria-label="Primary">
      {LINKS.map((link) => {
        const on = isCurrent(link.to);
        return (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onPick}
            className={`nav-link ${on ? 'is-active' : ''}`}
            aria-current={on ? 'page' : undefined}
          >
            <i aria-hidden="true" />
            <span>{link.label}</span>
            {link.count ? <em>{link.count}</em> : null}
          </NavLink>
        );
      })}
    </nav>
  );
}

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="nav-theme" role="group" aria-label="Appearance">
      {['light', 'dark'].map((t) => (
        <button key={t} type="button" aria-pressed={theme === t} onClick={() => setTheme(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}

/**
 * The rail. On a wide screen it is a fixed left column: MiniDan as the mark,
 * the pages, and the contact line that used to be the footer. Below 1024px it
 * folds into a top bar and a full-screen sheet.
 */
export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <aside className="rail">
        <Link to="/" className="rail-brand" aria-label={`${profile.name}, home`}>
          <MiniDan pose="idle" px={5} animate />
          <span>minidan</span>
        </Link>

        <Links className="rail-links" />

        <div className="rail-foot">
          <span>{profile.location}</span>
          <span>{profile.availability}</span>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn →
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </aside>

      <header className={`topbar ${open ? 'is-open' : ''}`}>
        <Link to="/" className="topbar-brand" aria-label={`${profile.name}, home`}>
          <MiniDan pose="idle" px={2.5} />
          <span>minidan</span>
        </Link>
        <button
          type="button"
          className="topbar-menu"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="sheet"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      <div id="sheet" className={`nav-sheet ${open ? 'is-open' : ''}`} hidden={!open}>
        <Links className="sheet-links" onPick={() => setOpen(false)} />
        <div className="sheet-says">
          <p className="md-say md-say--right">{profile.availability}.</p>
          <MiniDan pose="wave" px={7} animate />
        </div>
        <div className="sheet-foot">
          <a className="sheet-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn →
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
          </span>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
}
