import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleHero from '../components/ParticleHero';

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
          <div className="banner-actions" role="group" aria-label="Hero actions">
            <Link to="/register" className="banner-btn banner-btn-primary">Register</Link>
            <Link to="/projects" className="banner-btn banner-btn-secondary">Join a Project</Link>
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
          className="user-funnel"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            How to Participate
          </motion.h2>
          <motion.p className="funnel-intro" variants={itemVariants}>
            General attendees who are interested in visiting and checking out projects are encouraged to come visit.
          </motion.p>
          <motion.div className="funnel-lanes" variants={containerVariants}>
            <motion.div className="funnel-lane funnel-lane-participants" variants={itemVariants}>
              <h3 className="funnel-lane-title">Register a Project</h3>
              <p className="funnel-lane-desc">Interested in leading your own project and bringing it to life? Start your own project for the STEM Fair today by filling out a proposal form.</p>
              <Link to="/register" className="cta-button cta-secondary">Register</Link>
            </motion.div>
            <motion.div className="funnel-lane funnel-lane-participants" variants={itemVariants}>
              <h3 className="funnel-lane-title">Join a Project</h3>
              <p className="funnel-lane-desc">If you&apos;re looking to join an ongoing project, you can browse the Projects tab and contribute your skills to an existing team that&apos;s looking for members.</p>
              <Link to="/projects" className="cta-button cta-secondary">Browse Projects</Link>
            </motion.div>
            <motion.div className="funnel-lane funnel-lane-industry" variants={itemVariants}>
              <h3 className="funnel-lane-title">Industry &amp; Sponsors</h3>
              <p className="funnel-lane-desc">Support the fair as a mentor, sponsor, or industry partner. Connect with emerging talent.</p>
              <Link to="/sponsors" className="cta-button cta-secondary">Get Involved</Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="key-dates-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Key Dates
          </motion.h2>
          <motion.div className="key-dates-list" variants={containerVariants}>
            <motion.div className="key-date-item" variants={itemVariants}>
              <span className="key-date-label">Event Day</span>
              <span className="key-date-value">April 17th</span>
              <span className="key-date-detail">Los Rios STEM Fair at Folsom Lake College</span>
            </motion.div>
            <motion.div className="key-date-item" variants={itemVariants}>
              <span className="key-date-label">Proposal Deadline</span>
              <span className="key-date-value">TBD</span>
              <span className="key-date-detail">Submit your project proposal</span>
            </motion.div>
            <motion.div className="key-date-item" variants={itemVariants}>
              <span className="key-date-label">Team Formation</span>
              <span className="key-date-value">TBD</span>
              <span className="key-date-detail">Form teams via Discord</span>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}

export default Home;

