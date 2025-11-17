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
          <h1 className="project-detail-title">Project Name 5</h1>
          <p className="project-detail-subtitle">
            A brief description of the fifth project and its purpose. This project demonstrates full-stack development with modern frameworks.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Next.js</span>
            <span className="project-detail-tag">Tailwind</span>
            <span className="project-detail-tag">Prisma</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src="https://via.placeholder.com/1200x600?text=Project+5" alt="Project 5" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                This project is a full-stack application built with Next.js, featuring server-side rendering, 
                API routes, and modern styling with Tailwind CSS. It demonstrates production-ready development practices.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Server-side rendering (SSR)</li>
                <li>Static site generation (SSG)</li>
                <li>API routes and serverless functions</li>
                <li>Tailwind CSS for styling</li>
                <li>Prisma ORM for database management</li>
                <li>Optimized performance and SEO</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Built with Next.js 14, this project leverages React Server Components, App Router, and modern React features. 
                Prisma provides type-safe database access, while Tailwind CSS enables rapid UI development.
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
                <span className="project-detail-info-value">Full-Stack</span>
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

