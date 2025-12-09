import React, { useEffect, useState } from 'react';
import './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [shouldShowCursor, setShouldShowCursor] = useState(false);

  useEffect(() => {
    // Check if device is a touch device or small screen
    const checkShouldShowCursor = () => {
      const isTouchDevice = 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      
      const isSmallScreen = window.innerWidth <= 1024;
      
      return !isTouchDevice && !isSmallScreen;
    };

    const shouldShow = checkShouldShowCursor();
    setShouldShowCursor(shouldShow);

    // Don't set up cursor if it shouldn't be shown
    if (!shouldShow) {
      return;
    }

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.navbar-link') ||
        target.closest('.logo1') ||
        target.closest('.logo2') ||
        target.closest('a, button, [role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const handleResize = () => {
      setShouldShowCursor(checkShouldShowCursor());
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render cursor on touch devices or small screens
  if (!shouldShowCursor) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;

