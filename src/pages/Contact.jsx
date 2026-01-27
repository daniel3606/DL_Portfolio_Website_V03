import React, { useRef, useState } from 'react';
import './Contact.css';
import { sendEmail } from '../utils/Email.js';
import LinkedInIcon from '../assets/linkedin_icon.png';
import GitHubIcon from '../assets/github_icon.png';
import InstagramIcon from '../assets/instagram_icon.png';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const formData = {
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      formRef.current.reset();
    } else {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="page-content contact-page">
      <div className="contact-container">
        <h1 className="contact-title">CONTACT ME</h1>
        
        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className="contact-info-section">
            <h2 className="contact-info-title">CONTACT INFORMATION</h2>
            
            <div className="contact-info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+12482209668" className="info-link">
                +1 (248) 220-9668
              </a>
            </div>
            
            <div className="contact-info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:daniel2060306@gmail.com" className="info-link">
                daniel2060306@gmail.com
              </a>
              <a href="mailto:dllim@umich.edu" className="info-link">
                dllim@umich.edu
              </a>
            </div>
            
            <div className="social-links-section">
              <h3 className="social-links-title">SOCIAL MEDIA</h3>
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/daniel-lim0306/" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/daniel3606" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHubIcon} alt="GitHub" className="social-icon" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://instagram.com/daniel.lim.06" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstagramIcon} alt="Instagram" className="social-icon" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Email Form */}
          <div className="contact-form-section">
            <h2 className="form-section-title">SEND ME A MESSAGE</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  required
                  className="form-input"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="Your message here..."
                />
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
