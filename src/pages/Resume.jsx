import React, { useState } from 'react';
import './Resume.css';
import resumePDF from '../assets/DanielLimResumeSWE13.7.pdf';

function Resume() {
  const [zoomLevel, setZoomLevel] = useState(75);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DanielLimResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <div className="resume-header-text">
            <h1 className="resume-title">Resume</h1>
            <p className="resume-subtitle">Download or view my latest resume below.</p>
          </div>
          <div className="resume-actions">
            <div className="zoom-controls">
              <button
                className="zoom-btn"
                onClick={() => setZoomLevel(prev => Math.max(prev - 10, 50))}
                aria-label="Zoom out"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="zoom-value">{zoomLevel}%</span>
              <button
                className="zoom-btn"
                onClick={() => setZoomLevel(prev => Math.min(prev + 10, 200))}
                aria-label="Zoom in"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <button className="btn-primary download-btn" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2V10M8 10L5 7M8 10L11 7M3 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        <div className="pdf-viewer-wrapper">
          <iframe
            src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=1&zoom=${zoomLevel}`}
            className="pdf-viewer"
            title="Daniel Lim Resume"
            key={zoomLevel}
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
