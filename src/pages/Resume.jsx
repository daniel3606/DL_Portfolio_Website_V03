import React from 'react';
import './Resume.css';
import resumePDF from '../assets/DanielLimResume_v9.2.pdf';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DanielLimResume_v9.2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1>Resume</h1>
          <button className="download-button" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
        
        <div className="pdf-viewer-container">
          <iframe
            src={`${resumePDF}#toolbar=1&navpanes=1&scrollbar=1`}
            className="pdf-viewer"
            title="Daniel Lim Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;

