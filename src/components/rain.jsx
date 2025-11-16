import React, { useEffect, useRef } from 'react';
import './rain.css';

const Rain = () => {
  const frontRowRef = useRef(null);
  const backRowRef = useRef(null);

  useEffect(() => {
    const makeItRain = () => {
      if (!frontRowRef.current || !backRowRef.current) return;

      // Clear existing drops
      frontRowRef.current.innerHTML = '';
      backRowRef.current.innerHTML = '';

      let increment = 0;
      let drops = '';
      let backDrops = '';

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        increment += randoFiver;

        drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
        backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
      }

      frontRowRef.current.innerHTML = drops;
      backRowRef.current.innerHTML = backDrops;
    };

    makeItRain();
    const interval = setInterval(makeItRain, 5000); // Regenerate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rain">
      <div className="rain front-row" ref={frontRowRef}></div>
      <div className="rain back-row" ref={backRowRef}></div>
    </div>
  );
};

export default Rain;
