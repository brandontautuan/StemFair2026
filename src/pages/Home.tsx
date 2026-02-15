import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticleHero from '../components/ParticleHero';
import './EventFlow.css';
import './FAQ.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';

const faqs = [
  { question: 'Who can participate?', answer: 'Coming soon' },
  { question: 'What is the team size?', answer: 'TBD' },
  { question: 'Is prior experience required?', answer: 'Coming soon' },
];

const HOME_PAGE_CLASS = 'home-page';

function Home() {
  useEffect(() => {
    document.documentElement.classList.add(HOME_PAGE_CLASS);
    return () => document.documentElement.classList.remove(HOME_PAGE_CLASS);
  }, []);

  return (
    <>
      <div className="banner-container home-hero">
        <ParticleHero className="banner-canvas" />
        <div className="banner-text">
          <h1 className="banner-title">Los Rios STEM Fair</h1>
          <p className="banner-tagline">Learn by Doing</p>
          <p className="banner-subtitle">April 17th • Folsom Lake College</p>
          <div className="banner-actions banner-actions-pyramid" role="group" aria-label="Hero actions">
            <Link to="/register" className="banner-btn banner-btn-primary">Register</Link>
            <Link to="/proposal-form" className="banner-btn banner-btn-secondary">Propose a Project</Link>
            <Link to="/projects" className="banner-btn banner-btn-secondary">Join a Project</Link>
          </div>
        </div>
      </div>

      <main className="main-content home-content">
        <section className="event-intro event-intro-compact">
          <h2 className="section-title">
            What is the Los Rios STEM Fair
          </h2>
          <div className="intro-content">
            <p className="intro-text">
              The Los Rios STEM Fair is where &quot;learning by doing&quot; meets professional opportunity. We are providing a platform for community college students to bridge the gap between academic theory and the industry, allowing you to showcase your technical skills directly to professionals and the Los Rios Community. Whether you want to start a solo endeavor or a large-scale group project, this is your stage to present your work to those who move the industry forward.
            </p>
          </div>
          <div className="key-dates-schedule-inline">
            <h3 className="section-title key-dates-schedule-heading">Event Schedule (Tentative)</h3>
            <p className="key-dates-schedule-intro">
              April 17th at Folsom Lake College.
            </p>
            <ul className="schedule-list" aria-label="Event schedule">
              <li className="schedule-item">
                <span className="schedule-time">8:30 – 9:30 AM</span>
                <span className="schedule-title">Check-In &amp; Refreshments</span>
                <p className="schedule-desc">
                  Guests arrive, check in, and enjoy light refreshments. A chance to settle in, mingle, and get ready for the day ahead.
                </p>
              </li>
              <li className="schedule-item">
                <span className="schedule-time">9:30 – 10:00 AM</span>
                <span className="schedule-title">Welcome Address</span>
                <p className="schedule-desc">
                  Opening remarks and an overview of the day&apos;s events to kick off the Los Rios STEM Fair.
                </p>
              </li>
              <li className="schedule-item">
                <span className="schedule-time">9:40 AM – 12:15 PM</span>
                <span className="schedule-title">Project Presentations</span>
                <p className="schedule-desc">
                  Teams deliver formal presentations of their projects to judges and attendees in scheduled time slots.
                </p>
              </li>
              <li className="schedule-item">
                <span className="schedule-time">12:30 – 2:30 PM</span>
                <span className="schedule-title">Project Showcase &amp; Lunch</span>
                <p className="schedule-desc">
                  Browse project tables at your own pace while enjoying lunch. A great opportunity to chat with teams, see demos, and explore hands-on exhibits.
                </p>
              </li>
              <li className="schedule-item">
                <span className="schedule-time">2:30 – 3:15 PM</span>
                <span className="schedule-title">Awards &amp; Closing Remarks</span>
                <p className="schedule-desc">
                  Recognition of outstanding projects followed by closing remarks to wrap up the fair.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="event-flow-section">
          <h2 className="section-title event-flow-title">
            Event Flow
          </h2>
          <p className="event-flow-intro">
            Follow these three phases to participate in the Los Rios STEM Fair and present your project on April 17th.
          </p>
          <div className="event-flow-phases">
            <div className="flow-phase">
              <div className="flow-phase-header">
                <span className="flow-phase-number">1</span>
                <h3 className="flow-phase-title">Registration &amp; Proposal</h3>
              </div>
              <p className="flow-phase-desc">
                Register and submit a project proposal. Complete the Registration Form to sign up,
                then submit a Proposal Form with your project idea. When registering, you&apos;ll indicate
                whether your project will participate in the <strong>Presentation Period</strong> (scheduled
                formal presentations) or the <strong>Showcase/Open Floor</strong> (informal walk-by viewing).
                This helps us organize the fair and connect you with potential team members.
              </p>
              <div className="flow-phase-actions">
                <Link to="/register" className="flow-cta flow-cta-primary">Register</Link>
                <Link to="/proposal-form" className="flow-cta flow-cta-secondary">Submit Proposal</Link>
              </div>
            </div>
            <div className="flow-phase">
              <div className="flow-phase-header">
                <span className="flow-phase-number">2</span>
                <h3 className="flow-phase-title">Team Formation via Discord</h3>
              </div>
              <p className="flow-phase-desc">
                Join our Discord server to find teammates, form project groups, and stay updated on announcements.
                Discord is the primary hub for team formation and event coordination—don&apos;t miss out!
              </p>
              <div className="flow-phase-actions">
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="flow-cta flow-cta-primary">Join Discord</a>
              </div>
            </div>
            <div className="flow-phase">
              <div className="flow-phase-header">
                <span className="flow-phase-number">3</span>
                <h3 className="flow-phase-title">Project Development</h3>
              </div>
              <p className="flow-phase-desc">
                Develop your project with your team. Use Discord to collaborate, ask questions, and get support.
                Your work culminates at the Los Rios STEM Fair on <strong>April 17th</strong> at Folsom Lake College.
              </p>
              <div className="flow-event-formats">
                <h4 className="flow-formats-title">Event Day Formats</h4>
                <p className="flow-formats-intro">Choose which format fits your project when you register:</p>
                <div className="flow-format-cards">
                  <div className="flow-format-card">
                    <h5 className="flow-format-name">Presentation Period</h5>
                    <p className="flow-format-desc">
                      Scheduled, formal presentations. Your team presents to judges and attendees in a dedicated time slot.
                    </p>
                  </div>
                  <div className="flow-format-card">
                    <h5 className="flow-format-name">Showcase / Open Floor</h5>
                    <p className="flow-format-desc">
                      Free-roam, informal viewing. Attendees browse projects at their own pace—great for demos and hands-on exhibits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flow-phase-timeline">
                <span className="flow-timeline-badge">Event Day</span>
                <span className="flow-timeline-date">April 17th • Folsom Lake College</span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-intro">
            Have questions about the Los Rios STEM Fair? Find answers below. For additional help,
            reach out via email or ping an admin on Discord.
          </p>
          <dl className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <dt className="faq-question">{faq.question}</dt>
                <dd className="faq-answer">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}

export default Home;
