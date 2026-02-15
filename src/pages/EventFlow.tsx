import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventFlow.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const phaseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const viewport = { once: false, amount: 0.12 };

function EventFlow() {
  return (
    <main className="main-content">
      <motion.section
        className="event-flow-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1
          className="page-title event-flow-title"
          variants={phaseVariants}
        >
          Event Flow
        </motion.h1>
        <motion.p
          className="event-flow-intro"
          variants={phaseVariants}
        >
          Follow these three phases to participate in the Los Rios STEM Fair and present your project on April 17th.
        </motion.p>

        <motion.div
          className="event-flow-phases"
          variants={containerVariants}
        >
          <motion.div className="flow-phase" variants={phaseVariants}>
            <div className="flow-phase-header">
              <span className="flow-phase-number">1</span>
              <h2 className="flow-phase-title">Registration &amp; Proposal</h2>
            </div>
            <p className="flow-phase-desc">
              Register and submit a project proposal. Complete the Registration Form to sign up, 
              then submit a Proposal Form with your project idea. When registering, you&apos;ll indicate 
              whether your project will participate in the <strong>Presentation Period</strong> (scheduled 
              formal presentations) or the <strong>Showcase/Open Floor</strong> (informal walk-by viewing). 
              This helps us organize the fair and connect you with potential team members.
            </p>
            <div className="flow-phase-actions">
              <Link to="/register" className="flow-cta flow-cta-primary">
                Register
              </Link>
              <Link to="/proposal-form" className="flow-cta flow-cta-secondary">
                Submit Proposal
              </Link>
            </div>
          </motion.div>

          <motion.div className="flow-phase" variants={phaseVariants}>
            <div className="flow-phase-header">
              <span className="flow-phase-number">2</span>
              <h2 className="flow-phase-title">Team Formation via Discord</h2>
            </div>
            <p className="flow-phase-desc">
              Join our Discord server to find teammates, form project groups, and stay updated on announcements. 
              Discord is the primary hub for team formation and event coordination—don&apos;t miss out!
            </p>
            <div className="flow-phase-actions">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flow-cta flow-cta-primary"
              >
                Join Discord
              </a>
            </div>
          </motion.div>

          <motion.div className="flow-phase" variants={phaseVariants}>
            <div className="flow-phase-header">
              <span className="flow-phase-number">3</span>
              <h2 className="flow-phase-title">Project Development</h2>
            </div>
            <p className="flow-phase-desc">
              Develop your project with your team. Use Discord to collaborate, ask questions, and get support. 
              Your work culminates at the Los Rios STEM Fair on <strong>April 17th</strong> at Folsom Lake College.
            </p>
            <div className="flow-event-formats">
              <h3 className="flow-formats-title">Event Day Formats</h3>
              <p className="flow-formats-intro">Choose which format fits your project when you register:</p>
              <div className="flow-format-cards">
                <div className="flow-format-card">
                  <h4 className="flow-format-name">Presentation Period</h4>
                  <p className="flow-format-desc">
                    Scheduled, formal presentations. Your team presents to judges and attendees in a dedicated time slot.
                  </p>
                </div>
                <div className="flow-format-card">
                  <h4 className="flow-format-name">Showcase / Open Floor</h4>
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
    </main>
  );
}

export default EventFlow;
