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
            PyTorch based neural drawing recognition tool
          </p>
          <div className="project-detail-tags">
            <span className="project-detail-tag">Python</span>
            <span className="project-detail-tag">PyTorch</span>
            <span className="project-detail-tag">AI</span>
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
                Scribble AI is a neural network-based drawing recognition tool built with PyTorch. The application uses deep learning 
                algorithms to analyze and classify hand-drawn sketches and scribbles in real-time. By leveraging convolutional neural 
                networks (CNNs), Scribble AI can identify and categorize various drawing patterns, making it useful for applications 
                ranging from digit recognition to object classification and creative AI assistants.
              </p>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Features</h2>
              <ul className="project-detail-section-content">
                <li>Real-time drawing recognition and classification</li>
                <li>Deep learning model trained with PyTorch</li>
                <li>Support for multiple drawing categories and patterns</li>
                <li>Neural network inference for quick predictions</li>
                <li>Model training and evaluation capabilities</li>
                <li>Interactive drawing interface for testing</li>
              </ul>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technical Details</h2>
              <p className="project-detail-section-content">
                Scribble AI is built using PyTorch, a popular deep learning framework for Python. The project implements convolutional 
                neural networks (CNNs) optimized for image recognition tasks. The model is trained on curated datasets of drawings and 
                scribbles, learning to extract features and classify them accurately. The application processes input drawings through 
                the neural network architecture, providing real-time predictions. Python serves as the primary programming language, 
                with PyTorch handling the machine learning computations, tensor operations, and gradient-based optimization during training.
              </p>
            </div>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-info-box">
              <h3 className="project-detail-info-title">Project Info</h3>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Status</span>
                <span className="project-detail-info-value">In Development</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Year</span>
                <span className="project-detail-info-value">2024</span>
              </div>
              <div className="project-detail-info-item">
                <span className="project-detail-info-label">Category</span>
                <span className="project-detail-info-value">AI/ML Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail6;

