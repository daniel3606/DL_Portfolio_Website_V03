import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

import QuadlyImg01 from '../assets/Quadly_img01.png';
import QuadlyImg02 from '../assets/Quadly_img02.png';
import QuadlyImg03 from '../assets/Quadly_img03.png';
import QuadlyImg04 from '../assets/Quadly_img04.png';
import QuadlyImg05 from '../assets/Quadly_img05.png';
import QuadlyQrIos from '../assets/quadly_qr_ios.png';

const ProjectDetailQuadly = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Quadly</h1>
          <p className="project-detail-subtitle">
            A verified campus community platform for University of Michigan students—discussion boards, schedule planning,
            and course insights in one place.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Next.js</span>
            <span className="project-detail-tag">NestJS</span>
            <span className="project-detail-tag">Prisma</span>
            <span className="project-detail-tag">PostgreSQL</span>
            <span className="project-detail-tag">Expo</span>
          </div>
        </div>

        <div className="project-detail-image-container" aria-label="Quadly web preview">
          <img
            src={QuadlyImg05}
            alt="Quadly landing page preview"
            className="project-detail-image"
            loading="lazy"
          />
        </div>

        <div className="project-detail-mobile-scroll" aria-label="Quadly mobile app screens">
          <img
            src={QuadlyImg01}
            alt="Quadly home and schedule screens"
            className="project-detail-mobile-image"
            loading="lazy"
          />
          <img
            src={QuadlyImg02}
            alt="Quadly community screen"
            className="project-detail-mobile-image"
            loading="lazy"
          />
          <img
            src={QuadlyImg03}
            alt="Quadly post detail screen"
            className="project-detail-mobile-image"
            loading="lazy"
          />
          <img
            src={QuadlyImg04}
            alt="Additional Quadly mobile screen"
            className="project-detail-mobile-image"
            loading="lazy"
          />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                Quadly is a campus community platform built exclusively for verified UMich students. It brings together
                discussion boards, schedule management, and course-related content into a single experience across web and
                mobile.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>University email verification for access</li>
                <li>Community discussion boards with posts and comments</li>
                <li>Saved boards and personalized navigation</li>
                <li>Schedule planning with a weekly grid</li>
                <li>Cross-platform experience (web + mobile)</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Tech Stack</h2>
              <p className="project-detail-section-content">
                Built as a monorepo with a Next.js web app, a NestJS API, and an Expo React Native mobile app. Prisma and
                PostgreSQL power the data layer, with shared TypeScript utilities across packages.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">Live</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">Software</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="https://quadly.org/" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  Live Site →
                </a>
              </div>
              <div className="project-detail-info-item">
                <a
                  href="https://github.com/daniel3606/Quadly"
                  className="project-detail-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository →
                </a>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">iOS QR</h3>
              <div className="project-detail-qr">
                <img src={QuadlyQrIos} alt="Quadly iOS QR code" loading="lazy" />
                <p className="project-detail-qr-caption">Scan to view the iOS project link.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://quadly.org/" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            Visit Quadly
          </a>
          <a href="https://github.com/daniel3606/Quadly" className="project-detail-button" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailQuadly;

