import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Schedule.css';

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

function Schedule() {
  return (
    <main className="main-content">
      <motion.section
        className="page-section schedule-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title" variants={itemVariants}>
          Schedule
        </motion.h1>
        <motion.div className="section-content" variants={containerVariants}>
          <motion.p className="schedule-disclaimer" variants={itemVariants}>
            <strong>This schedule is prone to heavy change and is not finalized yet.</strong>
          </motion.p>
          <motion.p className="section-text schedule-intro" variants={itemVariants}>
            The day-of schedule for April 17th at Folsom Lake College. Times and sessions may be updated closer to the event.
          </motion.p>

          <motion.ul className="schedule-list" aria-label="Event schedule" variants={containerVariants}>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">12:00 – 12:30</span>
              <span className="schedule-title">Intro Period</span>
              <p className="schedule-desc">
                Guests arrive and get settled. Coffee and light refreshments will be available—a good time to mingle, chat, and connect. Tables and materials will be set up during this window.
              </p>
            </motion.li>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">12:30 – 2:00</span>
              <span className="schedule-title">Presentation Period</span>
              <p className="schedule-desc">
                Teams that opt to present will give formal presentations during this block. Attendees can watch project demos, hear from student teams, and join Q&amp;A in a structured session.
              </p>
            </motion.li>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">2:00 – 4:00</span>
              <span className="schedule-title">Showcase Period</span>
              <p className="schedule-desc">
                Teams that opt to showcase will table their projects for walk-by viewing. Visitors can browse tables, view projects, and talk with teams. Food will be served during this time.
              </p>
            </motion.li>
          </motion.ul>

          <motion.div className="schedule-cta" variants={itemVariants}>
            <Link to="/event-flow" className="schedule-cta-link">View Event Flow & Key Dates →</Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default Schedule;

