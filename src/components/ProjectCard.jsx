import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { image, name, description, tags, detailsLink } = project;

  return (
    <div className='project-card'>
      <div className="project-card-header">
        <h3 className="project-name">{name}</h3>
      </div>
      <div className='project-image-container'>
        <img src={image} alt={name} className='project-image'/>
      </div>
      <div className="project-content">
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-button-container">
          <button className="project-button" onClick={() => window.open(detailsLink, '_blank')}>
            See More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
