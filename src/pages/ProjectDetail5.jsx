import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail5 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">AR Hair Studio</h1>
          <p className="project-detail-subtitle">
            A 3D AR hairstyle try-on application that allows users to visualize different hairstyles in real-time using augmented reality technology.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Unity</span>
            <span className="project-detail-tag">Blender</span>
            <span className="project-detail-tag">C#</span>
            <span className="project-detail-tag">AR</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://media.cgtrader.com/variants/95rqr03rqjh6thjkz9veva6v4vek/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/3D%20anime%20male%20hairstyle%20pack.webp" alt="AR Hair Studio - 3D Hairstyle Models" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                AR Hair Studio is an innovative augmented reality application that enables users to try on various hairstyles 
                in real-time using their device's camera. Built with Unity and leveraging AR Foundation, the app provides 
                an immersive experience for visualizing different hair styles, colors, and cuts before making a decision. 
                The application uses advanced face tracking and 3D rendering to create realistic hair overlays.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Real-time AR face tracking and hair overlay</li>
                <li>Multiple hairstyle options and variations</li>
                <li>Hair color customization and adjustment</li>
                <li>3D hair models created in Blender</li>
                <li>Smooth AR tracking and rendering</li>
                <li>User-friendly interface for easy navigation</li>
                <li>Photo capture and sharing capabilities</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                The application is built using Unity game engine with C# scripting, providing robust AR capabilities through 
                AR Foundation framework. 3D hair models are created and optimized in Blender, then imported into Unity for 
                real-time rendering. The app utilizes device camera and AR tracking to accurately map hairstyles onto the 
                user's face, creating a seamless augmented reality experience. The project demonstrates expertise in 3D 
                modeling, AR development, and mobile application design.
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

export default ProjectDetail5;

