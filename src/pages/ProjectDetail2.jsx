import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import PortfolioImage1 from '../assets/portfolio_preview01.png';
import PortfolioImage2 from '../assets/portfolio_preview02.png';
import PortfolioImage3 from '../assets/portfolio_preview03.png';
import PortfolioImage4 from '../assets/portfolio_preview04.png';

const ProjectDetail2 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Portfolio Website</h1>
          <p className="project-detail-subtitle">
            History of how my portfolio website changed and evolved over time.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">JavaScript</span>
            <span className="project-detail-tag">CSS</span>
            <span className="project-detail-tag">HTML</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src={PortfolioImage1} alt="Project 2" className="project-detail-image" />
          <img src={PortfolioImage2} alt="Project 2" className="project-detail-image" />
          <img src={PortfolioImage3} alt="Project 2" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                This project showcases the evolution of my personal portfolio website.
                It highlights the various design and development techniques I have employed over time to improve user experience and visual appeal.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Responsive design for all devices</li>
                <li>Interactive user interface</li>
                <li>Clean and semantic HTML structure</li>
                <li>Modern CSS styling and animations</li>
                <li>JavaScript functionality and interactivity</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built with vanilla JavaScript, HTML5, and CSS3, this project emphasizes fundamental web development skills. 
                The codebase follows best practices for maintainability and performance.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">Completed</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Year</span>
                <span className="project-detail-info-value">2024</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">Web Development</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="https://portfolio-website-v02-git-main-daniel-lims-projects-eddeb3c7.vercel.app/" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              </div>
              <div className="project-detail-info-item">
                <a href="https://github.com/daniel3606/DL_Portfolio_Website_V03" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository 1 →
                </a>
              </div>
              <div className="project-detail-info-item">
                <a href="https://github.com/daniel3606/DL_Portfolio_Website_V02-1-JSX" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository 2 →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://portfolio-website-v02-git-main-daniel-lims-projects-eddeb3c7.vercel.app/" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Live Project (Old Version)
          </a>
          <a href="https://github.com/daniel3606/DL_Portfolio_Website_V03" className="project-detail-button" target="_blank" rel="noopener noreferrer">
            View Source Code (New Version)
          </a>
          <a href="https://github.com/daniel3606/DL_Portfolio_Website_V02-1-JSX" className="project-detail-button" target="_blank" rel="noopener noreferrer">
            View Source Code (Old Version)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail2;

