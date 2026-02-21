import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/projects') {
      return location.pathname.startsWith('/projects');
    }
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Daniel Lim
        </Link>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={`navbar-link ${isActive('/') && !isActive('/projects') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/projects" className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/resume" className={`navbar-link ${isActive('/resume') ? 'active' : ''}`}>
            Resume
          </Link>
          <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
