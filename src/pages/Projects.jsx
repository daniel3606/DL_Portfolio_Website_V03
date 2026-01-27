import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import ArtFitImage from '../assets/artfit_preview.png';
import PortfolioImage from '../assets/portfolio_preview01.png';
import SideQuestImage from '../assets/sidequest_preview.png';
import ScribbleAIImage from '../assets/scribbleai_image.webp';
import KelseyMuseumImage from '../assets/Kelsey Museum Cohort Preview.png';
import UIUXLogo from '../assets/UIUXLogo.png';
import SoftwareLogo from '../assets/SoftwareLogo.png';
import Logo3D from '../assets/3DLogo.png';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategories, setActiveCategories] = useState({
    software: categoryParam === 'software' ? true : categoryParam ? false : true,
    uiux: categoryParam === 'uiux' ? true : categoryParam ? false : true,
    '3dxr': categoryParam === '3dxr' ? true : categoryParam ? false : true
  });

  useEffect(() => {
    if (categoryParam) {
      setActiveCategories({
        software: categoryParam === 'software',
        uiux: categoryParam === 'uiux',
        '3dxr': categoryParam === '3dxr'
      });
    }
  }, [categoryParam]);

  // Sample projects data with categories
  const projects = [
    {
      image: 'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg',
      name: 'Face Recognition(Spectacles)',
      description: 'Spectacle Pogram that Detect, Saves, and Recognizes faces from a user\'s view.',
      tags: ['Lens Studio', 'Spectacles', 'TypeScript','XR', 'PostgreSQL'],
      detailsLink: '/projects/spectacles',
      category: '3dxr'
    },
    {
      image: 'https://media.cgtrader.com/variants/95rqr03rqjh6thjkz9veva6v4vek/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/3D%20anime%20male%20hairstyle%20pack.webp',
      name: 'AR Hair Studio',
      description: '3D AR Hairstyle Try-On App',
      tags: ['Unity', 'Blender', 'C#', 'AR'],
      detailsLink: '/projects/project-5',
      category: '3dxr'
    },
    {
      image: ArtFitImage,
      name: 'ArtFit',
      description: 'Social Media Platform that allows developers to interact with designers.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      detailsLink: '/projects/artfit',
      category: 'software'
    },
    {
      image: PortfolioImage,
      name: 'Portfolio Website',
      description: 'Current website that showcases my projects and skills.',
      tags: ['React','JavaScript', 'CSS', 'HTML'],
      detailsLink: '/projects/portfolio',
      category: 'software'
    },
    {
      image: SideQuestImage,
      name: 'Side Quest',
      description: 'Travel add-on that makes exploring new cities special and engaging.',
      tags: ['Figma', 'UI/UX', 'HTML', 'CSS'],
      detailsLink: '/projects/sidequest',
      category: 'uiux'
    },
    {
      image: ScribbleAIImage,
      name: 'Scribble AI',
      description: 'PyTorch based neural drawing recognition tool',
      tags: ['Python', 'PyTorch', 'AI', 'Neural Networks'],
      detailsLink: '/projects/scribble-ai',
      category: 'software'
    },
    {
      image: KelseyMuseumImage,
      name: 'Kelsey Museum Cohort',
      description: 'AR experience for Kelsey Museum of Archaeology using 8th Wall and TypeScript',
      tags: ['8th Wall', 'TypeScript', 'Blender', 'AR'],
      detailsLink: '/projects/kelsey-museum',
      category: '3dxr'
    }
  ];

  const toggleCategory = (category) => {
    setActiveCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredProjects = projects.filter(project => 
    activeCategories[project.category]
  );

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        
        <div className="category-toggles">
          <button
            className={`category-toggle ${activeCategories.software ? 'active' : ''}`}
            onClick={() => toggleCategory('software')}
          >
            <img src={SoftwareLogo} alt="Software Logo" className="category-toggle-logo" />
            <span className="category-toggle-text">SOFTWARE</span>
          </button>
          <button
            className={`category-toggle ${activeCategories.uiux ? 'active' : ''}`}
            onClick={() => toggleCategory('uiux')}
          >
            <img src={UIUXLogo} alt="UI/UX Logo" className="category-toggle-logo" />
            <span className="category-toggle-text">UI/UX</span>
          </button>
          <button
            className={`category-toggle ${activeCategories['3dxr'] ? 'active' : ''}`}
            onClick={() => toggleCategory('3dxr')}
          >
            <img src={Logo3D} alt="3D/XR Logo" className="category-toggle-logo" />
            <span className="category-toggle-text">3D/XR</span>
          </button>
        </div>

        <div className="projects-column">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <div className="no-projects-message">
              <p>No projects selected. Please select at least one category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

