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
          <motion.p className="section-text schedule-intro" variants={itemVariants}>
            The day-of schedule for April 17th at Folsom Lake College.
          </motion.p>

          <motion.ul className="schedule-list" aria-label="Event schedule" variants={containerVariants}>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">9:00 – 10:00 AM</span>
              <span className="schedule-title">Coffee and Welcome Address</span>
              <p className="schedule-desc">
                Welcome address by Folsom Lake College Administration.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-keynote" variants={itemVariants}>
              <span className="schedule-time">10:00 – 10:30 AM</span>
              <span className="schedule-title">"From Data to Intelligence"</span>
              <p className="schedule-desc">
                Keynote speech by <strong>Ramkarthik Ganesan</strong>, Fellow at Micron Technology.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-keynote" variants={itemVariants}>
              <span className="schedule-time">10:45 – 11:15 AM</span>
              <span className="schedule-title">"Solidigm: Storage for AI innovation"</span>
              <p className="schedule-desc">
                Keynote speech by <strong>Tahmid Rahman</strong>, Director Product Marketing, Solidigm Corp.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-keynote" variants={itemVariants}>
              <span className="schedule-time">11:30 AM – 12:00 PM</span>
              <span className="schedule-title">"Building Traffic Planning and Management Systems using Innovative AI Technologies"</span>
              <p className="schedule-desc">
                Keynote speech by <strong>Marcie Kahbody</strong>, CIO at Caltrans.
              </p>
            </motion.li>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">12:00 – 2:00 PM</span>
              <span className="schedule-title">Student Demo Showcasing</span>
              <p className="schedule-desc">
                Browse student project demos, interact with teams, and see their work in action.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-keynote" variants={itemVariants}>
              <span className="schedule-time">2:00 – 2:30 PM</span>
              <span className="schedule-title">"Why Computer Science is Essential in the Age of Generative AI"</span>
              <p className="schedule-desc">
                Keynote speech by <strong>Tim Jones</strong>, Sr. Solutions Architect at AWS.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-keynote" variants={itemVariants}>
              <span className="schedule-time">2:45 – 3:15 PM</span>
              <span className="schedule-title">"STEM Professional 2.0: Thriving on the Razor Edge of AI"</span>
              <p className="schedule-desc">
                Keynote speech by <strong>Shashank Bangalore Lakshman</strong>, Engineering Leader – MLOps, Renesas Electronics.
              </p>
            </motion.li>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">3:30 – 4:00 PM</span>
              <span className="schedule-title">Closing Ceremony</span>
              <p className="schedule-desc">
                Certificates of Achievement and Prizes, by Dean of STEM <strong>Dr. Lorena Navarro</strong>.
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

