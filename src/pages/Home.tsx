import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleHero from '../components/ParticleHero';
import './EventFlow.css';
import './FAQ.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';

const faqs = [
  { question: 'Who can participate?', answer: 'Coming soon' },
  { question: 'What is the team size?', answer: 'TBD' },
  { question: 'Is prior experience required?', answer: 'Coming soon' },
];

/* Same pattern as Event Flow: container with stagger, items fade in with y: 24 → 0 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const viewport = { once: false, amount: 0.12 };

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
            <div className="banner-actions-row banner-actions-row-top">
              <Link to="/register" className="banner-btn banner-btn-primary">Register</Link>
              <Link to="/proposal-form" className="banner-btn banner-btn-secondary">Propose a Project</Link>
            </div>
            <div className="banner-actions-row banner-actions-row-bottom">
              <Link to="/projects" className="banner-btn banner-btn-secondary">Join a Project</Link>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content home-content">
        <motion.section
          className="event-intro event-intro-compact"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About the Fair
          </motion.h2>
          <motion.div className="intro-content" variants={itemVariants}>
            <p className="intro-text">
              The Los Rios STEM Fair is where &quot;learning by doing&quot; meets professional opportunity. We are providing a rare platform for community college students to bridge the gap between academic theory and the industry, allowing you to showcase your technical skills directly to professionals and the Los Rios Community. Whether you want to start a solo endeavor or a large-scale group project, this is your stage to present your work to those who move the industry forward.
            </p>
            <div className="key-dates-schedule-inline">
              <h3 className="key-dates-schedule-heading">Day-of Schedule</h3>
              <p className="key-dates-schedule-disclaimer">
                <strong>This schedule is prone to heavy change and is not finalized yet.</strong>
              </p>
              <p className="key-dates-schedule-intro">
                April 17th at Folsom Lake College. Times and sessions may be updated closer to the event.
              </p>
              <ul className="schedule-list" aria-label="Event schedule">
                <li className="schedule-item">
                  <span className="schedule-time">12:00 – 12:30</span>
                  <span className="schedule-title">Intro Period</span>
                  <p className="schedule-desc">
                    Guests arrive and get settled. Coffee and light refreshments will be available—a good time to mingle, chat, and connect. Tables and materials will be set up during this window.
                  </p>
                </li>
                <li className="schedule-item">
                  <span className="schedule-time">12:30 – 2:00</span>
                  <span className="schedule-title">Presentation Period</span>
                  <p className="schedule-desc">
                    Teams that opt to present will give formal presentations during this block. Attendees can watch project demos, hear from student teams, and join Q&amp;A in a structured session.
                  </p>
                </li>
                <li className="schedule-item">
                  <span className="schedule-time">2:00 – 4:00</span>
                  <span className="schedule-title">Showcase Period</span>
                  <p className="schedule-desc">
                    Teams that opt to showcase will table their projects for walk-by viewing. Visitors can browse tables, view projects, and talk with teams. Food will be served during this time.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="event-flow-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="section-title event-flow-title" variants={itemVariants}>
            Event Flow
          </motion.h2>
          <motion.p className="event-flow-intro" variants={itemVariants}>
            Follow these three phases to participate in the Los Rios STEM Fair and present your project on April 17th.
          </motion.p>
          <motion.div className="event-flow-phases" variants={containerVariants}>
            <motion.div className="flow-phase" variants={itemVariants}>
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
            </motion.div>
            <motion.div className="flow-phase" variants={itemVariants}>
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
            </motion.div>
            <motion.div className="flow-phase" variants={itemVariants}>
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
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="faq-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="section-title faq-title" variants={itemVariants}>
            Frequently Asked Questions
          </motion.h2>
          <motion.p className="faq-intro" variants={itemVariants}>
            Have questions about the Los Rios STEM Fair? Find answers below. For additional help,
            reach out via email or ping an admin on Discord.
          </motion.p>
          <dl className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div key={index} className="faq-item" variants={itemVariants}>
                <dt className="faq-question">{faq.question}</dt>
                <dd className="faq-answer">{faq.answer}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.section>
      </main>
    </>
  );
}

export default Home;

