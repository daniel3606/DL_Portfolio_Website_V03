import React, { useState } from 'react';
import './Resume.css';
import resumePDF from '../assets/DanielLimResumeSWE13.7.pdf';

function Resume() {
  const [zoomLevel, setZoomLevel] = useState(75);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DanielLimResumeSWE13.7.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 200)); // Max zoom 200%
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50)); // Min zoom 50%
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1>Resume</h1>
        </div>
        
        <div className="pdf-viewer-container">
          <div className="zoom-controls">
            <button className="zoom-button" onClick={handleZoomOut} aria-label="Zoom out">
              -
            </button>
            <span className="zoom-level">{zoomLevel}%</span>
            <button className="zoom-button" onClick={handleZoomIn} aria-label="Zoom in">
              +
            </button>
          </div>
          <iframe
            src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=1&zoom=${zoomLevel}`}
            className="pdf-viewer"
            title="Daniel Lim Resume"
            key={zoomLevel} // Force re-render when zoom changes
          />
        </div>
        
        <div className="download-button-container">
          <button className="download-button" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;

