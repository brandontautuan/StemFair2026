import { motion } from 'framer-motion';

const REGISTRATION_FORM_URL = 'https://forms.gle/evzMxp7bMHRrw8eJA';

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

function Register() {
  return (
    <main className="main-content">
      <motion.section
        className="page-section register-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title" variants={itemVariants}>
          Registration
        </motion.h1>
        <motion.p className="section-text register-intro" variants={itemVariants}>
          Fill out the Registration Form below to sign up for the Los Rios STEM Fair. 
          Join our Discord to stay updated on announcements and team formation.
        </motion.p>
        <motion.div className="form-embed-container" variants={itemVariants}>
          <iframe
            src={`${REGISTRATION_FORM_URL}?embedded=true`}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="2026 STEM Fair Registration Form"
          >
            Loading…
          </iframe>
        </motion.div>
        <motion.p className="form-fallback" variants={itemVariants}>
          If the form doesn&apos;t load,{' '}
          <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
            open it in a new tab
          </a>
          .
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Register;

