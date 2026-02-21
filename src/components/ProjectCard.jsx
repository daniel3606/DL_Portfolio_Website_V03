import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { image, name, description, tags, detailsLink } = project;

  return (
    <Link to={detailsLink} className="project-card">
      <div className="project-card-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <h3 className="project-card-name">{name}</h3>
          <p className="project-card-description">{description}</p>
        </div>
        <div className="project-card-bottom">
          <div className="project-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <span className="project-card-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
