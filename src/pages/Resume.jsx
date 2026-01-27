import React from 'react';
import './Resume.css';
import resumePDF from '../assets/DanielLimResume_11.7.pdf';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DanielLimResume_11.7.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1>Resume</h1>
        </div>
        
        <div className="pdf-viewer-container">
          <iframe
            src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=1&zoom=75`}
            className="pdf-viewer"
            title="Daniel Lim Resume"
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

