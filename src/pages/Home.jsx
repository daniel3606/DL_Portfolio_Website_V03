// Home.jsx (modified)
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import UIUXLogo from '../assets/UIUXLogo.png';
import SoftwareLogo from '../assets/SoftwareLogo.png';
import Logo3D from '../assets/3DLogo.png';
import { sendEmail } from '../utils/Email.js';

const Home = () => {
  const cardsRef = useRef(null);
  const contactRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCardsVisible(true);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setContactVisible(true);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (contactRef.current) contactObserver.observe(contactRef.current);

    return () => {
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
      if (contactRef.current) contactObserver.unobserve(contactRef.current);
    };
  }, []);

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
    <div className="page-content home-page">
      <section className="snap-section main-content">
        <div className="name-first">DANIEL</div>
        <div className="subheading">Software Developer · UX Designer</div>
        <div className="name-last">LIM</div>
      </section>

      <section
        ref={cardsRef}
        className={`snap-section cards-section ${cardsVisible ? 'cards-visible' : ''}`}
      >
        <div className="skill-card">
          <div className="skill-card-text">UI/UX</div>
          <img src={UIUXLogo} alt="UI/UX Logo" className="skill-card-logo" />
        </div>
        <div className="skill-card">
          <div className="skill-card-text">SOFTWARE</div>
          <img src={SoftwareLogo} alt="Software Logo" className="skill-card-logo" />
        </div>
        <div className="skill-card">
          <div className="skill-card-text">XR/3D</div>
          <img src={Logo3D} alt="XR/3D Logo" className="skill-card-logo" />
        </div>
      </section>

      <section
        ref={contactRef}
        className={`snap-section contact-section ${contactVisible ? 'contact-visible' : ''}`}
      >
        <h2 className="contact-section-title">CONTACT ME</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form-home">
          <div className="form-group-home">
            <input
              type="text"
              name="from_name"
              required
              className="form-input-home"
              placeholder="Your name"
            />
          </div>

          <div className="form-group-home">
            <input
              type="email"
              name="from_email"
              required
              className="form-input-home"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group-home">
            <input
              type="text"
              name="subject"
              required
              className="form-input-home"
              placeholder="Subject"
            />
          </div>

          <div className="form-group-home">
            <textarea
              name="message"
              required
              className="form-textarea-home"
              rows="6"
              placeholder="Your message here..."
            />
          </div>

          {status.message && <div className={`form-status-home ${status.type}`}>{status.message}</div>}

          <button type="submit" className="submit-button-home" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;