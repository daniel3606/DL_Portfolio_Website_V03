import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.hamburger-menu')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Resume
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
