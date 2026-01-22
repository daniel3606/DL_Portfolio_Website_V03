import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import ArtFitImage from '../assets/artfit_preview.png';
import PortfolioImage from '../assets/portfolio_preview01.png';
import SideQuestImage from '../assets/sidequest_preview.png';
import ScribbleAIImage from '../assets/scribbleai_image.webp';

const Projects = () => {
  // Sample projects data - you can update this with your actual projects
  const projects = [
    {
      image: 'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg',
      name: 'Face Recognition(Spectacles)',
      description: 'Spectacle Pogram that Detect, Saves, and Recognizes faces from a user\'s view.',
      tags: ['Lens Studio', 'Spectacles', 'TypeScript','XR', 'PostgreSQL'],
      detailsLink: '/projects/spectacles'
    },
    {
      image: 'https://media.cgtrader.com/variants/95rqr03rqjh6thjkz9veva6v4vek/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/3D%20anime%20male%20hairstyle%20pack.webp',
      name: 'AR Hair Studio',
      description: '3D AR Hairstyle Try-On App',
      tags: ['Unity', 'Blender', 'C#', 'AR'],
      detailsLink: '/projects/ar-hair-studio'
    },
    {
      image: ArtFitImage,
      name: 'ArtFit',
      description: 'Social Media Platform that allows developers to interact with designers.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      detailsLink: '/projects/artfit'
    },
    {
      image: PortfolioImage,
      name: 'Portfolio Website',
      description: 'Current website that showcases my projects and skills.',
      tags: ['React','JavaScript', 'CSS', 'HTML'],
      detailsLink: '/projects/portfolio'
    },
    {
      image: SideQuestImage,
      name: 'Side Quest',
      description: 'Travel add-on that makes exploring new cities special and engaging.',
      tags: ['Figma', 'UI/UX', 'HTML', 'CSS'],
      detailsLink: '/projects/sidequest'
    },
    {
      image: ScribbleAIImage,
      name: 'Scribble AI',
      description: 'PyTorch based neural drawing recognition tool',
      tags: ['Python', 'PyTorch', 'AI', 'Neural Networks'],
      detailsLink: '/projects/scribble-ai'
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

