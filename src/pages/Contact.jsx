import React, { useRef, useState } from 'react';
import './Contact.css';
import { sendEmail } from '../utils/Email.js';

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
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-group">
              <h3 className="contact-info-label">Email</h3>
              <a href="mailto:daniel2060306@gmail.com" className="contact-info-value">
                daniel2060306@gmail.com
              </a>
              <a href="mailto:dllim@umich.edu" className="contact-info-value">
                dllim@umich.edu
              </a>
            </div>

            <div className="contact-info-group">
              <h3 className="contact-info-label">Phone</h3>
              <a href="tel:+12482209668" className="contact-info-value">
                +1 (248) 220-9668
              </a>
            </div>

            <div className="contact-info-group">
              <h3 className="contact-info-label">Socials</h3>
              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/daniel-lim0306/"
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/daniel3606"
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/daniel.lim.06"
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name" className="form-label">Name</label>
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
                <label htmlFor="from_email" className="form-label">Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                rows="6"
                placeholder="Tell me about your project..."
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
