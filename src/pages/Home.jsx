import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Prevent body scrolling when on home page
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="page-content home-page">
      <div className="main-content">
        <div className="heading">Daniel Lim</div>
        <div className="subheading">Software Developer·UI/UX Designer</div>
      </div>
    </div>
  );
};

export default Home;

