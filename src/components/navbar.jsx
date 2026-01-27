import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsLoaded(true);
  }, []);

  return (
    <nav className="navbar">
      <div className={`navbar-menu ${isLoaded ? 'loaded' : ''}`}>
        <Link 
          to="/" 
          className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link 
          to="/resume" 
          className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}
        >
          Resume
        </Link>
        <Link 
          to="/contact" 
          className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
