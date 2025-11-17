import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import LinkedInIcon from '../assets/linkedin_icon.png';
import GitHubIcon from '../assets/github_icon.png';
import InstagramIcon from '../assets/instagram_icon.png';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceId = 'service_9m2beit';
    const templateId = 'template_09uyns7';
    const publicKey = 'IWauOUFwAXLu6hW7l';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          setIsSubmitting(false);
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">Get in touch with me through the form below or reach out directly</p>
        
        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className="contact-info-section">
            <h2 className="contact-info-title">Contact Information</h2>
            
            <div className="contact-info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+1234567890" className="info-link">
                +1 (248) 220-9668
              </a>
            </div>
            
            <div className="contact-info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:your.email@example.com" className="info-link">
                daniel2060306@gmail.com
              </a>
              <a href="mailto:your.email@example.com" className="info-link">
                dllim@umich.edu
              </a>
            </div>
            
            <div className="social-links-section">
              <h3 className="social-links-title">Social Media</h3>
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
            <h2 className="form-section-title">Send me a message</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="form-input"
                placeholder="Message subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
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
