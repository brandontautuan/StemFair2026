import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Requirements.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';

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

function Requirements() {
  return (
    <main className="main-content">
      <motion.section
        className="requirements-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title requirements-title" variants={itemVariants}>
          Requirements & Links
        </motion.h1>
        <motion.p className="requirements-intro" variants={itemVariants}>
          All the links you need to participate in the Los Rios STEM Fair. Complete these steps to register, 
          form teams, and submit your proposal.
        </motion.p>

        <motion.div className="requirements-list" variants={containerVariants}>
          <motion.div className="requirement-card" variants={itemVariants}>
            <div className="requirement-icon" aria-hidden>#</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Discord</h2>
              <p className="requirement-desc">
                Join our Discord server for announcements, team formation, and event coordination. 
                Discord is required for Phase 2.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="requirement-link"
              >
                Join Discord →
              </a>
            </div>
          </motion.div>

          <motion.div className="requirement-card" variants={itemVariants}>
            <div className="requirement-icon" aria-hidden>📋</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Registration Form</h2>
              <p className="requirement-desc">
                Sign up to participate in the fair. Complete this form to register and help us 
                organize the event.
              </p>
              <Link to="/register" className="requirement-link">
                Fill Registration Form →
              </Link>
            </div>
          </motion.div>

          <motion.div className="requirement-card requirement-card-placeholder" variants={itemVariants}>
            <div className="requirement-icon" aria-hidden>📄</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Proposal Form</h2>
              <p className="requirement-desc">
                Submit your project proposal. This form will be available soon—check back later or 
                join Discord for updates.
              </p>
              <span className="requirement-placeholder">Coming soon</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="requirements-cta" variants={itemVariants}>
          <Link to="/event-flow" className="requirements-cta-link">
            View the full Event Flow →
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default Requirements;
