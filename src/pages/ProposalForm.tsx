import { motion } from 'framer-motion';
import './ProposalForm.css';

const PROPOSAL_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe5X_OXnJ1D2kShmTaz-OJvl5GVdv2YfM2SiuSzinXEeVc32w/viewform?embedded=true';

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

function ProposalForm() {
  return (
    <main className="main-content">
      <motion.section
        className="proposal-form-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title proposal-form-title" variants={itemVariants}>
          Project Proposal Form
        </motion.h1>
        <motion.p className="proposal-form-intro" variants={itemVariants}>
          Submit your project idea for the Los Rios STEM Fair. Complete the form below to propose
          a presentation or showcase for April 17th at Folsom Lake College.
        </motion.p>

        <motion.div className="proposal-form-embed-wrapper" variants={itemVariants}>
          <iframe
            src={PROPOSAL_FORM_EMBED_URL}
            title="Los Rios STEM Fair Project Proposal Form"
            className="proposal-form-iframe"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default ProposalForm;
