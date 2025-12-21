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
            3D AR Hairstyle Try-On App
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Unity</span>
            <span className="project-detail-tag">Blender</span>
            <span className="project-detail-tag">C#</span>
            <span className="project-detail-tag">AR</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://via.placeholder.com/400x200?=Project+5" alt="AR Hair Studio" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                AR Hair Studio is an innovative augmented reality application that allows users to try on different 3D hairstyles 
                in real-time using their device's camera. Built with Unity, this app combines advanced AR technology with realistic 
                3D hair models created in Blender, providing users with an immersive and interactive hair styling experience.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Real-time AR face tracking and hair placement</li>
                <li>Multiple 3D hairstyle options to try on</li>
                <li>Realistic hair rendering and physics simulation</li>
                <li>Interactive UI for browsing and selecting hairstyles</li>
                <li>Photo capture functionality to save favorite looks</li>
                <li>Optimized performance for mobile AR experiences</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Developed using Unity as the primary game engine, AR Hair Studio leverages AR Foundation for cross-platform 
                augmented reality capabilities. The application uses C# for scripting and game logic. High-quality 3D hair models 
                were created and optimized in Blender, featuring realistic textures and animations. The app implements advanced 
                face tracking algorithms to accurately place and align hairstyles with the user's head position and orientation.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail5;

