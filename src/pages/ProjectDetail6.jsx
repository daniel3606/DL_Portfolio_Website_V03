import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail6 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Project Name 6</h1>
          <p className="project-detail-subtitle">
            A brief description of the sixth project and what makes it special. This project showcases mobile development and cloud infrastructure.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">React Native</span>
            <span className="project-detail-tag">GraphQL</span>
            <span className="project-detail-tag">AWS</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://via.placeholder.com/1200x600?text=Project+6" alt="Project 6" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                This project is a cross-platform mobile application built with React Native, featuring GraphQL APIs 
                and AWS cloud infrastructure. It demonstrates modern mobile development and scalable backend architecture.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Cross-platform mobile app (iOS & Android)</li>
                <li>GraphQL API integration</li>
                <li>AWS cloud services</li>
                <li>Real-time data synchronization</li>
                <li>Offline functionality</li>
                <li>Push notifications</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built with React Native, this project uses GraphQL for efficient data fetching and mutations. 
                AWS services including Lambda, DynamoDB, and S3 provide scalable backend infrastructure. 
                The app implements native features and optimizations for both platforms.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">In Development</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Year</span>
                <span className="project-detail-info-value">2024</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">Mobile Development</span>
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

export default ProjectDetail6;

