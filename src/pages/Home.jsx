import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import UIUXLogo from '../assets/UIUXLogo.png';
import SoftwareLogo from '../assets/SoftwareLogo.png';
import Logo3D from '../assets/3DLogo.png';

const Home = () => {
  const cardsRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className="page-content home-page">
      <div className="main-content">
        <div className="name-first">DANIEL</div>
        <div className="subheading">Software Developer · UX Designer</div>
        <div className="name-last">LIM</div>
      </div>
      
      <div 
        ref={cardsRef}
        className={`cards-section ${cardsVisible ? 'cards-visible' : ''}`}
      >
        <div className="skill-card">
          <div className="skill-card-text">UI/UX</div>
          <img src={UIUXLogo} alt="UI/UX Logo" className="skill-card-logo" />
        </div>
        <div className="skill-card">
          <div className="skill-card-text">SOFTWARE</div>
          <img src={SoftwareLogo} alt="Software Logo" className="skill-card-logo" />
        </div>
        <div className="skill-card">
          <div className="skill-card-text">XR/3D</div>
          <img src={Logo3D} alt="XR/3D Logo" className="skill-card-logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;

