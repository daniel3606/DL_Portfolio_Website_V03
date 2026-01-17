import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ScribbleAIImage from '../assets/scribbleai_image.webp';

const ProjectDetail6 = () => {
  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <Link to="/projects" className="back-button">
            ← Back to Projects
          </Link>
          <h1 className="project-detail-title">Scribble AI</h1>
          <p className="project-detail-subtitle">
            A Streamlit-based drawing recognition application that uses a CNN model to classify hand-drawn sketches, recognizing various categories like airplanes, bananas, cats, dogs, cars, and trees.
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Python</span>
            <span className="project-detail-tag">PyTorch</span>
            <span className="project-detail-tag">Streamlit</span>
            <span className="project-detail-tag">AI</span>
            <span className="project-detail-tag">Neural Networks</span>
          </div>
        </div>

        <div className="project-detail-image-container">
          <img src={ScribbleAIImage} alt="Scribble AI" className="project-detail-image" />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Overview</h2>
              <p className="project-detail-section-content">
                Scribble AI (also known as QuickDraw AI) is a drawing recognition application that leverages deep learning 
                to classify hand-drawn sketches in real-time. Built with PyTorch and Streamlit, the application uses a 
                Convolutional Neural Network (CNN) model to accurately identify drawings across multiple categories including 
                airplanes, bananas, cats, dogs, cars, and trees. The interactive web interface allows users to draw directly 
                on a canvas or upload images for classification, making it an engaging demonstration of neural network capabilities.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Interactive drawing canvas for creating sketches</li>
                <li>Image upload support for existing drawings</li>
                <li>CNN-based classification model with high accuracy</li>
                <li>Real-time predictions with confidence scores</li>
                <li>Training visualization and metrics</li>
                <li>Support for multiple categories (airplane, banana, cat, dog, car, tree)</li>
                <li>Customizable model training with 2-4 selected categories</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                The application is built using Python with PyTorch for the deep learning model architecture. The frontend 
                is powered by Streamlit, providing an intuitive web interface for drawing and classification. The CNN model 
                processes hand-drawn sketches and outputs predictions with confidence scores. Additional libraries including 
                NumPy, Pillow, and scikit-learn support image processing and model evaluation. The project demonstrates 
                end-to-end machine learning workflow from data preprocessing to model training and real-time inference.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">Completed</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Year</span>
                <span className="project-detail-info-value">2024</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">AI/ML</span>
              </div>
            </div>

            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Links</h3>
              <div className="project-detail-info-item">
                <a href="https://github.com/daniel3606/ScribbleAI" className="project-detail-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href="https://github.com/daniel3606/ScribbleAI" className="project-detail-button primary" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail6;

