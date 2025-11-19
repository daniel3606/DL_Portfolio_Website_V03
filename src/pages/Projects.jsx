import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import ArtFitImage from '../assets/artfit_preview.png';
import PortfolioImage from '../assets/portfolio_preview01.png';
import SideQuestImage from '../assets/sidequest_preview.png';

const Projects = () => {
  // Sample projects data - you can update this with your actual projects
  const projects = [
    {
      image: ArtFitImage,
      name: 'ArtFit',
      description: 'Social Media Platform that allows developers to interact with designers.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      detailsLink: '/projects/project-1'
    },
    {
      image: PortfolioImage,
      name: 'Portfolio Website',
      description: 'Current website that showcases my projects and skills.',
      tags: ['React','JavaScript', 'CSS', 'HTML'],
      detailsLink: '/projects/project-2'
    },
    {
      image: SideQuestImage,
      name: 'Side Quest',
      description: 'Travel add-on that makes exploring new cities special and engaging.',
      tags: ['Figma', 'UI/UX', 'HTML', 'CSS'],
      detailsLink: '/projects/project-3'
    },
    {
      image: 'https://via.placeholder.com/400x200?text=Project+4',
      name: 'Project Name 4',
      description: 'A brief description of the fourth project and its functionality.',
      tags: ['Vue.js', 'Firebase', 'TypeScript'],
      detailsLink: '/projects/project-4'
    },
    {
      image: 'https://via.placeholder.com/400x200?text=Project+5',
      name: 'Project Name 5',
      description: 'A brief description of the fifth project and its purpose.',
      tags: ['Next.js', 'Tailwind', 'Prisma'],
      detailsLink: '/projects/project-5'
    },
    {
      image: 'https://via.placeholder.com/400x200?text=Project+6',
      name: 'Project Name 6',
      description: 'A brief description of the sixth project and what makes it special.',
      tags: ['React Native', 'GraphQL', 'AWS'],
      detailsLink: '/projects/project-6'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

