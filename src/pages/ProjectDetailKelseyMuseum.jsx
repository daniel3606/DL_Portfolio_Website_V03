import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import KelseyMuseumImage from '../assets/Kelsey Museum Cohort Preview.png';
import KelseyMuseumVideo from '../assets/Kelsey Museum Video.mov';

const ProjectDetailKelseyMuseum = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Kelsey Museum Cohort</h1>
          <p className="project-detail-subtitle">
            An AR experience for Kelsey Museum of Archaeology using 8th Wall and TypeScript, allowing users to load and interact with 30+ artifacts through diverse mobile games and activities.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">8th Wall</span>
            <span className="project-detail-tag">TypeScript</span>
            <span className="project-detail-tag">Blender</span>
            <span className="project-detail-tag">AR</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src={KelseyMuseumImage} alt="Kelsey Museum AR Experience" className="project-detail-image" />
        </div>

        <div className="project-detail-video-container">
          <video 
            controls 
            className="project-detail-video"
          >
            <source src={KelseyMuseumVideo} type="video/quicktime" />
            <source src={KelseyMuseumVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                Kelsey Museum Cohort is an innovative augmented reality experience developed for the Kelsey Museum of Archaeology. 
                Built using 8th Wall's web-based AR platform and TypeScript, the application brings ancient artifacts to life 
                through interactive mobile experiences. Users can explore and interact with over 30 meticulously crafted 3D artifacts 
                through diverse games and educational activities, making archaeology accessible and engaging for modern audiences.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>30+ interactive 3D artifacts from the museum collection</li>
                <li>Diverse mobile games and educational activities</li>
                <li>Web-based AR using 8th Wall platform</li>
                <li>Optimized 3D performance with 40% faster scene load times</li>
                <li>High polygon accuracy maintained for detailed artifacts</li>
                <li>Cross-platform mobile compatibility</li>
                <li>Immersive user interactions with historical artifacts</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                The project is built using 8th Wall, a web-based AR platform that enables AR experiences directly in mobile browsers 
                without requiring native apps. TypeScript provides type safety and improved code maintainability throughout the development. 
                3D models are created and optimized in Blender, ensuring high-quality visual fidelity while maintaining performance. 
                A key achievement was optimizing 3D performance by reducing scene load times by 40% while preserving high polygon accuracy, 
                resulting in a smooth and responsive user experience. The application demonstrates expertise in web-based AR development, 
                3D optimization, and creating engaging educational experiences.
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
                <span className="project-detail-info-value">2024-2025</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">AR/XR</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailKelseyMuseum;
