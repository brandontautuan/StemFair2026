import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleHero from '../components/ParticleHero';
import './EventFlow.css';
import './FAQ.css';

const faqs = [
  {
    question: 'Who can participate?',
    answer:
      'The STEM Fair is open to all members of the Los Rios Community College District — students, faculty, and staff alike. Whether you are at American River College, Cosumnes River College, Folsom Lake College, or Sacramento City College, you are welcome to participate!',
  },
  {
    question: 'What is the team size limit?',
    answer:
      'Teams can have up to 6 members. You are also welcome to participate individually or in a smaller group.',
  },
  {
    question: 'Is prior experience required?',
    answer:
      'No prior experience is required! The STEM Fair is designed to be inclusive for participants of all skill levels. Come with curiosity and a willingness to learn.',
  },
  {
    question:
      'If I\'m already part of a participating project, do I still need to register to attend?',
    answer:
      'No — if you are already on a registered project team, you do not need to separately register as an attendee. Your project registration covers your participation.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}>
          <dt
            className="faq-question"
            role="button"
            tabIndex={0}
            onClick={() => toggle(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(index); } }}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-chevron" aria-hidden="true" />
          </dt>
          <dd className="faq-answer">
            <div className="faq-answer-inner">{faq.answer}</div>
          </dd>
        </div>
      ))}
    </dl>
  );
}

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
        </section>

        <section className="participate-section">
          <h2 className="section-title participate-title">
            How to Participate
          </h2>
          <p className="participate-intro">
            There are three ways to be part of the Los Rios STEM Fair. Whether you want to attend and explore,
            present your own work, or join an existing project, we&apos;d love to have you there.
          </p>
          <div className="participate-paths">
            <div className="participate-card">
              <div className="participate-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="participate-card-title">Attend the Event</h3>
              <p className="participate-card-desc">
                Register to attend the STEM Fair as a guest. Watch project presentations, explore
                the showcase floor, network with students and industry professionals, and be part
                of the Los Rios STEM community.
              </p>
              <Link to="/register" className="participate-card-btn">Register to Attend</Link>
            </div>
            <div className="participate-card">
              <div className="participate-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="participate-card-title">Showcase Your Project</h3>
              <p className="participate-card-desc">
                Have a project idea you&apos;d like to present? Submit a project proposal and get
                the chance to showcase your work to judges, industry professionals, and the
                broader Los Rios community on April 17th.
              </p>
              <Link to="/proposal-form" className="participate-card-btn">Submit a Proposal</Link>
            </div>
            <div className="participate-card">
              <div className="participate-card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </div>
              <h3 className="participate-card-title">Join an Existing Project</h3>
              <p className="participate-card-desc">
                Want to contribute but don&apos;t have your own project? Browse the list of registered
                projects looking for team members and ask to join one that interests you.
              </p>
              <Link to="/projects" className="participate-card-btn">Browse Projects</Link>
            </div>
          </div>
        </section>

        <section className="event-intro event-intro-compact">
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

        <section className="faq-section">
          <h2 className="section-title faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-intro">
            Have questions about the Los Rios STEM Fair? Find answers below. For additional help,
            reach out via email or ping an admin on Discord.
          </p>
          <FAQAccordion />
        </section>
      </main>
    </>
  );
}

export default Home;
