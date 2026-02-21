import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import ArtFitImage from '../assets/artfit_preview.png';
import PortfolioImage from '../assets/portfolio_preview01.png';
import SideQuestImage from '../assets/sidequest_preview.png';
import ScribbleAIImage from '../assets/scribbleai_image.webp';
import KelseyMuseumImage from '../assets/Kelsey Museum Cohort Preview.png';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeFilter, setActiveFilter] = useState(() => {
    return categoryParam || 'all';
  });

  useEffect(() => {
    if (categoryParam) {
      setActiveFilter(categoryParam);
    }
  }, [categoryParam]);

  const projects = [
    {
      image: 'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg',
      name: 'Face Recognition (Spectacles)',
      description: 'Spectacle program that detects, saves, and recognizes faces from a user\'s view in real-time.',
      tags: ['Lens Studio', 'Spectacles', 'TypeScript', 'XR'],
      detailsLink: '/projects/spectacles',
      category: '3dxr'
    },
    {
      image: 'https://media.cgtrader.com/variants/95rqr03rqjh6thjkz9veva6v4vek/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/3D%20anime%20male%20hairstyle%20pack.webp',
      name: 'AR Hair Studio',
      description: '3D augmented reality hairstyle try-on application built with Unity and Blender.',
      tags: ['Unity', 'Blender', 'C#', 'AR'],
      detailsLink: '/projects/ar-hair-studio',
      category: '3dxr'
    },
    {
      image: ArtFitImage,
      name: 'ArtFit',
      description: 'Social media platform that connects developers with designers for creative collaboration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      detailsLink: '/projects/artfit',
      category: 'software'
    },
    {
      image: PortfolioImage,
      name: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with a modern design.',
      tags: ['React', 'JavaScript', 'CSS'],
      detailsLink: '/projects/portfolio',
      category: 'software'
    },
    {
      image: SideQuestImage,
      name: 'Side Quest',
      description: 'Award-winning travel companion app that makes exploring new cities engaging and personal.',
      tags: ['Figma', 'UI/UX', 'HTML', 'CSS'],
      detailsLink: '/projects/sidequest',
      category: 'uiux'
    },
    {
      image: ScribbleAIImage,
      name: 'Scribble AI',
      description: 'PyTorch-based neural drawing recognition tool for real-time sketch classification.',
      tags: ['Python', 'PyTorch', 'AI', 'Neural Networks'],
      detailsLink: '/projects/scribble-ai',
      category: 'software'
    },
    {
      image: KelseyMuseumImage,
      name: 'Kelsey Museum Cohort',
      description: 'Augmented reality experience for the Kelsey Museum of Archaeology using 8th Wall.',
      tags: ['8th Wall', 'TypeScript', 'Blender', 'AR'],
      detailsLink: '/projects/kelsey-museum',
      category: '3dxr'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'software', label: 'Software' },
    { key: 'uiux', label: 'UI/UX' },
    { key: '3dxr', label: 'XR / 3D' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A collection of work spanning software engineering, design, and immersive technologies.
          </p>
        </div>

        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} />
            ))
          ) : (
            <div className="no-projects">
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
