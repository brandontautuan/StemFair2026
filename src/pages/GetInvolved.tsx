import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GetInvolved.css';

const SPONSORSHIP_FORM_URL = '#';

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

function GetInvolved() {
  return (
    <main className="main-content">
      <motion.section
        className="get-involved-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title get-involved-title" variants={itemVariants}>
          Get Involved
        </motion.h1>
        <motion.p className="get-involved-intro" variants={itemVariants}>
          Industry professionals, mentors, and sponsors—support the Los Rios STEM Fair and 
          connect with emerging talent.
        </motion.p>

        {/* Industry / Mentors Section */}
        <motion.div className="involved-block involved-industry" variants={itemVariants}>
          <h2 className="involved-block-title">Industry &amp; Mentors</h2>
          <p className="involved-block-desc">
            Are you an industry professional interested in attending? We welcome mentors, judges, 
            recruiters, and professionals who want to connect with students and support innovation.
          </p>
          <ul className="involved-list">
            <li>Connect with talented students and their projects</li>
            <li>Mentor and provide feedback to the next generation</li>
            <li>Network with faculty, peers, and collaborators</li>
          </ul>
          <Link to="/sponsors#industry" className="involved-cta">
            Open Industry Form →
          </Link>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div className="involved-block involved-sponsors" variants={itemVariants}>
          <h2 className="involved-block-title">Sponsors</h2>
          <p className="involved-block-desc">
            We are grateful to our sponsors for supporting the Los Rios STEM Fair. 
            Your contribution helps make this event possible.
          </p>
          {SPONSORSHIP_FORM_URL !== '#' ? (
            <a
              href={SPONSORSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="involved-cta"
            >
              Open Sponsorship Form →
            </a>
          ) : (
            <span className="involved-placeholder">Sponsorship Form coming soon—email stemfairlosrios@gmail.com</span>
          )}

          <div className="sponsor-tier gold-tier">
            <h3 className="tier-title">Gold Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="sponsor-card gold-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsor-tier silver-tier">
            <h3 className="tier-title">Silver Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="sponsor-card silver-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsor-tier bronze-tier">
            <h3 className="tier-title">Bronze Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="sponsor-card bronze-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default GetInvolved;
