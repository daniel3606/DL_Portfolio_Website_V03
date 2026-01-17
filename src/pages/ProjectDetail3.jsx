import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import SideQuestImage from '../assets/sidequest_preview.png';

const ProjectDetail3 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Side Quest</h1>
          <p className="project-detail-subtitle">
            A travel add-on that makes exploring new cities special and engaging, transforming ordinary trips into memorable adventures.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Figma</span>
            <span className="project-detail-tag">UI/UX</span>
            <span className="project-detail-tag">HTML</span>
            <span className="project-detail-tag">CSS</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src={SideQuestImage} alt="Side Quest" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                SideQuest is a gamified travel planning app designed to make exploring new places feel more exciting and interactive. As the UI/UX Design Lead, I led a team of four designers to create an end to end mobile experience in Figma, producing over 100 high fidelity screens including onboarding, dynamic maps, and itinerary building. The app motivates users through personalized quests and rewards that turn trip planning into a fun challenge rather than a chore. SideQuest won 1st Place for Best UI/UX at the MSU Imagine Software Fall 2024 Showcase, recognizing the project’s strong visual design and engaging user experience.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Interactive city exploration interface</li>
                <li>Curated local experiences and hidden gems</li>
                <li>Gamified quest system for engaging travel</li>
                <li>Personalized recommendations based on interests</li>
                <li>Social sharing and community features</li>
                <li>Offline map integration and navigation</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Design Process</h2>
              <p className="project-detail-section-content">
                The design process began with extensive user research and journey mapping to understand traveler pain points. 
                Using Figma, I created wireframes, interactive prototypes, and high-fidelity designs that prioritize usability 
                and visual appeal. The final implementation uses HTML and CSS to bring the design to life, ensuring a responsive 
                and accessible user experience across devices.
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
                <span className="project-detail-info-value">UI/UX Design</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="https://www.figma.com/design/FXXfsnlbR1YK03vDnxAZdQ/SideQuest-Updates?node-id=0-1&t=yKgNhbCSM5HeJ6wt-1" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  Figma Design →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://www.figma.com/design/FXXfsnlbR1YK03vDnxAZdQ/SideQuest-Updates?node-id=0-1&t=yKgNhbCSM5HeJ6wt-1" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Figma Design
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail3;

