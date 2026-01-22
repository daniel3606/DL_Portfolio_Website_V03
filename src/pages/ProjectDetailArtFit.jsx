import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ArtFitImage from '../assets/artfit_preview.png';

const ProjectDetailArtFit = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">ArtFit</h1>
          <p className="project-detail-subtitle">
            A social media platform that connects developers with designers, enabling collaboration and creative exchange in the tech community.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">React</span>
            <span className="project-detail-tag">Node.js</span>
            <span className="project-detail-tag">MongoDB</span>
            <span className="project-detail-tag">Express</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src={ArtFitImage} alt="ArtFit" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                ArtFit is a comprehensive social media platform designed to bridge the gap between developers and designers. 
                The platform facilitates meaningful connections, project collaborations, and knowledge sharing within the creative tech community.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>User authentication and profile management</li>
                <li>Real-time messaging and communication</li>
                <li>Project portfolio showcase</li>
                <li>Collaboration tools and project matching</li>
                <li>Community feed with posts and updates</li>
                <li>Search and discovery of professionals</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built with a modern MERN stack, ArtFit leverages React for a responsive frontend, Node.js and Express for 
                robust backend services, and MongoDB for flexible data storage. The application implements RESTful APIs, 
                real-time updates, and secure authentication mechanisms.
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
                <span className="project-detail-info-value">Social Media</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href='https://www.artfit.dev/' className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              </div>
              <div className="project-detail-info-item">
                <a href="https://github.com/daniel3606/ArtFit" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://www.artfit.dev/" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
          <a href="https://github.com/daniel3606/ArtFit" className="project-detail-button" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailArtFit;

