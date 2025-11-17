import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { image, name, description, tags, detailsLink } = project;

  return (
    <div className='project-card'>
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>
      <div className='project-image-container'>
        <img src={image} alt={name} className='project-image'/>
      </div>
      <div className="project-content">
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-button-container">
          <Link to={detailsLink} className="project-button">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;