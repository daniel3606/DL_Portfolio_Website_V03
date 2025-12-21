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
          <h1 className="project-detail-title">Face Recognition (Spectacles)</h1>
          <p className="project-detail-subtitle">
            Spectacle Program that Detects, Saves, and Recognizes faces from a user's view.
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
                Face Recognition (Spectacles) is an innovative augmented reality application built for Snap's Spectacles smart glasses. 
                The program leverages computer vision and machine learning to detect, capture, and recognize faces in real-time through 
                the user's field of view. This XR application combines Lens Studio's AR capabilities with a robust backend system for 
                storing and managing facial recognition data.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Real-time face detection through Spectacles camera</li>
                <li>Automatic face capture and storage functionality</li>
                <li>Face recognition and matching against stored database</li>
                <li>Integration with Lens Studio for AR overlays</li>
                <li>PostgreSQL database for secure face data storage</li>
                <li>TypeScript implementation for type safety and maintainability</li>
                <li>Seamless user experience in XR environment</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built using Lens Studio for creating immersive AR experiences on Snap Spectacles, this project implements face detection 
                and recognition algorithms optimized for real-time performance. The application uses TypeScript for robust type checking 
                and better code maintainability. Face data and recognition information are securely stored and managed in a PostgreSQL 
                database, enabling efficient querying and matching of recognized faces. The XR implementation takes full advantage of 
                Spectacles' camera capabilities and display system to provide an intuitive augmented reality interface.
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
                <span className="project-detail-info-value">XR/AR Development</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="https://github.com/daniel3606/Spectacles_Face_Recongizer" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://github.com/daniel3606/Spectacles_Face_Recongizer" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail4;

