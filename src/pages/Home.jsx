import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import QuadlyImage from '../assets/QuadlyFeaturedImage.png';
import ScribbleAIImage from '../assets/scribbleai_image.webp';
import SideQuestImage from '../assets/sidequest_preview.png';
import HeadshotImage from '../assets/05_Daniel_Lim_Headshot.png';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el, section) => {
    if (el) {
      el.dataset.section = section;
      sectionRefs.current.push(el);
    }
  };

  const featuredProjects = [
    {
      name: 'Quadly',
      description: 'Verified campus community platform for UMich students with boards, schedules, and course reviews.',
      tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
      image: QuadlyImage,
      link: '/projects/quadly',
    },
    {
      name: 'Scribble AI',
      description: 'Neural drawing recognition tool built with PyTorch for real-time sketch classification.',
      tags: ['Python', 'PyTorch', 'AI'],
      image: ScribbleAIImage,
      link: '/projects/scribble-ai',
    },
    {
      name: 'Side Quest',
      description: 'Award-winning travel companion app that makes exploring new cities engaging and personal.',
      tags: ['Figma', 'UI/UX', 'Research'],
      image: SideQuestImage,
      link: '/projects/sidequest',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-name">Daniel Lim</h1>
              <h2 className="hero-title">Software Developer & UX Designer</h2>
              <p className="hero-description">
                I build thoughtful digital experiences at the intersection of engineering and design.
                Currently studying at the University of Michigan.
              </p>
              <div className="hero-cta">
                <Link to="/projects" className="btn-primary">View My Work</Link>
                <Link to="/contact" className="btn-secondary">Get in Touch</Link>
              </div>
            </div>

            <div className="hero-image" aria-hidden="false">
              <img
                className="hero-headshot"
                src={HeadshotImage}
                alt="Daniel Lim headshot"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className={`about-section ${visibleSections.has('about') ? 'visible' : ''}`}
        ref={(el) => addRef(el, 'about')}
      >
        <div className="section-container">
          <span className="section-label">About</span>
          <div className="about-content">
            <h3 className="about-heading">
              I'm a developer who loves to build <em>user centered</em> products.
            </h3>
            <div className="about-text">
              <p>
                With experience spanning full-stack development, UI/UX design, and XR/3D technologies,
                I bring a multidisciplinary approach to every project. I believe the best digital products
                come from understanding both the technical possibilities and the human needs they serve.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, experimenting with
                emerging technologies, or working on creative side projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className={`featured-section ${visibleSections.has('featured') ? 'visible' : ''}`}
        ref={(el) => addRef(el, 'featured')}
      >
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Featured Work</span>
            <Link to="/projects" className="section-link">
              View all projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <Link
                to={project.link}
                key={project.name}
                className="featured-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="featured-card-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="featured-card-content">
                  <h4 className="featured-card-name">{project.name}</h4>
                  <p className="featured-card-desc">{project.description}</p>
                  <div className="featured-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`cta-section ${visibleSections.has('cta') ? 'visible' : ''}`}
        ref={(el) => addRef(el, 'cta')}
      >
        <div className="section-container cta-container">
          <h3 className="cta-heading">Interested in working together?</h3>
          <p className="cta-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link to="/contact" className="btn-primary">Let's Talk</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
