import { useRef, useState } from 'react';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';
import { sendEmail } from '../utils/email';
import './Contact.css';

const REASONS = ['A role', 'A coffee chat', 'A project', 'Something else'];

export default function Contact() {
  const formRef = useRef(null);
  const [reason, setReason] = useState(REASONS[0]);
  const [state, setState] = useState({ status: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ status: 'sending', message: '' });

    const form = formRef.current;

    // Exactly the four variables the EmailJS template declares; the reason
    // rides inside the message so the template mapping stays untouched.
    const result = await sendEmail({
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      subject: form.subject.value || reason,
      message: `[${reason}]\n\n${form.message.value}`,
    });

    if (result.success) {
      form.reset();
      setReason(REASONS[0]);
      setState({ status: 'sent', message: 'Sent. I usually reply within a day or two.' });
    } else {
      setState({
        status: 'error',
        message: `That didn’t send. Email me directly at ${profile.email}.`,
      });
    }
  };

  return (
    <main className="contact page-top">
      <div className="shell">
        <header className="contact-head">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="display contact-title">Let&rsquo;s talk.</h1>
            <p className="lede contact-lede">
              Engineering and product roles, a project, or just a coffee chat about shipping mobile — all worth a
              message.
            </p>
          </Reveal>
        </header>

        <div className="contact-grid">
          {/* Form ------------------------------------------------------ */}
          <Reveal className="contact-form-wrap">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <fieldset className="field-reasons">
                <legend className="eyebrow">What is this about</legend>
                <div className="reason-row">
                  {REASONS.map((r) => (
                    <button
                      type="button"
                      key={r}
                      className={`reason ${reason === r ? 'is-active' : ''}`}
                      onClick={() => setReason(r)}
                      aria-pressed={reason === r}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="field-row">
                <div className="field">
                  <label className="eyebrow" htmlFor="from_name">
                    Name
                  </label>
                  <input id="from_name" name="from_name" type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label className="eyebrow" htmlFor="from_email">
                    Email
                  </label>
                  <input id="from_email" name="from_email" type="email" required placeholder="you@company.com" />
                </div>
              </div>

              <div className="field">
                <label className="eyebrow" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" placeholder="A short headline" />
              </div>

              <div className="field">
                <label className="eyebrow" htmlFor="message">
                  Message
                </label>
                <textarea id="message" name="message" rows="5" required placeholder="What are you working on?" />
              </div>

              <div className="contact-submit">
                <button type="submit" className="btn btn-primary" disabled={state.status === 'sending'}>
                  {state.status === 'sending' ? 'Sending' : 'Send message'}
                </button>
                {state.message ? (
                  <p className={`contact-status is-${state.status}`} role="status">
                    {state.message}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          {/* Direct ---------------------------------------------------- */}
          <Reveal className="contact-side" delay={0.09}>
            <div className="side-block">
              <span className="label">Direct</span>
              <a className="side-big" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="side-link" href={`mailto:${profile.schoolEmail}`}>
                {profile.schoolEmail}
              </a>
            </div>

            <div className="side-block">
              <span className="label">Elsewhere</span>
              <a className="side-link" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="side-link" href={profile.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="side-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Resume PDF
              </a>
            </div>

            <div className="side-block">
              <span className="label">Based in</span>
              <p className="side-text">{profile.location}</p>
              <p className="side-note">Open to remote and relocation. Usually replies within a day or two.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
