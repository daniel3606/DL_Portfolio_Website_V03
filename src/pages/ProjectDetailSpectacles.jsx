import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetailSpectacles = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Face Recognition (Spectacles)</h1>
          <p className="project-detail-subtitle">
            A Spectacles program that detects, saves, and recognizes faces from a user's view using augmented reality technology.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Lens Studio</span>
            <span className="project-detail-tag">Spectacles</span>
            <span className="project-detail-tag">TypeScript</span>
            <span className="project-detail-tag">XR</span>
            <span className="project-detail-tag">PostgreSQL</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg" alt="Face Recognition Spectacles" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                Face Recognition for Spectacles is an augmented reality application built for Meta Spectacles that enables 
                real-time face detection, recognition, and storage directly from the user's first-person perspective. 
                The program leverages Lens Studio to create an immersive AR experience where users can identify and remember 
                faces they encounter, making it a powerful tool for social interactions and networking in AR environments.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Real-time face detection using AR camera feed</li>
                <li>Face recognition and matching against saved database</li>
                <li>Persistent face storage and management</li>
                <li>First-person view integration with Spectacles</li>
                <li>Database integration with PostgreSQL for face data</li>
                <li>TypeScript-based development for type safety</li>
                <li>Seamless AR experience with Lens Studio</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                The application is developed using Lens Studio, Meta's platform for creating AR experiences on Spectacles. 
                Built with TypeScript for robust type checking and better code maintainability, the program utilizes computer 
                vision algorithms for face detection and recognition. PostgreSQL database is integrated to store and manage 
                face data, enabling persistent recognition across sessions. The XR capabilities of Spectacles provide a 
                unique first-person perspective, making face recognition feel natural and intuitive in augmented reality.
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
                <span className="project-detail-info-value">AR/XR</span>
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

export default ProjectDetailSpectacles;

