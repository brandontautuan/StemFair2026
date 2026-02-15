import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventFlow.css';

const dates = [
  {
    date: 'February 22',
    label: 'Propose a Project',
    description:
      'Submit your project proposal by this date. This is your chance to outline your idea and secure your spot at the STEM Fair.',
    buttonLabel: 'Submit Proposal',
    buttonTo: '/proposal-form',
  },
  {
    date: 'March 8',
    label: 'Join a Project',
    description:
      'Looking to join a project? Browse available teams and connect with a group that matches your interests by this date. Don\u2019t wait\u2014spots fill up fast!',
    buttonLabel: 'Browse Projects',
    buttonTo: '/projects',
  },
  {
    date: 'April 5',
    label: 'Sponsor the Event',
    description:
      'Last day for organizations to sponsor the event. Help support student innovation and get your brand in front of the STEM community.',
    buttonLabel: 'Become a Sponsor',
    buttonTo: '/sponsors',
  },
  {
    date: 'April 16',
    label: 'Register to Attend',
    description:
      'Register to attend the STEM Fair by this date. Secure your spot to experience student projects, demos, and presentations in person.',
    buttonLabel: 'Register Now',
    buttonTo: '/register',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

const viewport = { once: false, amount: 0.12 };

function EventFlow() {
  return (
    <main className="main-content">
      <motion.section
        className="important-dates-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title" variants={itemVariants}>
          Important Dates
        </motion.h1>
        <motion.p className="important-dates-subtitle" variants={itemVariants}>
          Mark your calendar — here are the key deadlines for the Los Rios STEM Fair.
        </motion.p>

        <div className="timeline">
          {dates.map((item, i) => (
            <motion.div className="timeline-item" key={i} variants={itemVariants}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i < dates.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h2 className="timeline-label">{item.label}</h2>
                <p className="timeline-desc">{item.description}</p>
                <Link to={item.buttonTo} className="timeline-btn">
                  {item.buttonLabel} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default EventFlow;
