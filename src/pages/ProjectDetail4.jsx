import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail4 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Project Name 4</h1>
          <p className="project-detail-subtitle">
            A brief description of the fourth project and its functionality. This project showcases modern frontend frameworks and cloud services.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Vue.js</span>
            <span className="project-detail-tag">Firebase</span>
            <span className="project-detail-tag">TypeScript</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://via.placeholder.com/1200x600?text=Project+4" alt="Project 4" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                This project leverages Vue.js for reactive user interfaces, TypeScript for type safety, 
                and Firebase for backend services. It demonstrates modern frontend development practices and cloud integration.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Reactive Vue.js components</li>
                <li>TypeScript for type safety</li>
                <li>Firebase authentication</li>
                <li>Real-time database updates</li>
                <li>Cloud storage integration</li>
                <li>Progressive Web App capabilities</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built with Vue.js 3 and TypeScript, this project uses Firebase for authentication, database, and hosting. 
                The application implements Vue Composition API, reactive state management, and modern build tools.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">Active</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Year</span>
                <span className="project-detail-info-value">2024</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">Frontend Development</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="#" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              </div>
              <div className="project-detail-info-item">
                <a href="#" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="#" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
          <a href="#" className="project-detail-button" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail4;

