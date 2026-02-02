import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventFlow.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';
const INTEREST_FORM_URL = 'https://forms.gle/evzMxp7bMHRrw8eJA';

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
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

function EventFlow() {
  return (
    <main className="main-content">
      <section className="event-flow-section">
        <motion.h1
          className="page-title event-flow-title"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Event Flow
        </motion.h1>
        <motion.p
          className="event-flow-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Follow these three phases to participate in the Los Rios STEM Fair and present your project on April 17th.
        </motion.p>

        <motion.div
          className="event-flow-phases"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flow-phase" variants={phaseVariants}>
            <div className="flow-phase-header">
              <span className="flow-phase-number">1</span>
              <h2 className="flow-phase-title">Interest &amp; Proposal</h2>
            </div>
            <p className="flow-phase-desc">
              Register your interest and submit a project proposal. Complete the Interest Form to express your intent, 
              then submit a Proposal Form with your project idea. This helps us organize the fair and connect you with 
              potential team members.
            </p>
            <div className="flow-phase-actions">
              <Link to="/register" className="flow-cta flow-cta-primary">
                Register Interest
              </Link>
              <a href="#" className="flow-cta flow-cta-secondary" title="Proposal form coming soon">
                Submit Proposal
              </a>
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
              Your work culminates at the Los Rios STEM Fair on <strong>April 17th</strong> at Folsom Lake College, 
              where you&apos;ll present your project to judges, peers, and industry professionals.
            </p>
            <div className="flow-phase-timeline">
              <span className="flow-timeline-badge">Event Day</span>
              <span className="flow-timeline-date">April 17th • Folsom Lake College</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

export default EventFlow;
