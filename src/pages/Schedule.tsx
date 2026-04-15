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
              <span className="schedule-time">9:00 – 9:30 AM</span>
              <span className="schedule-location">Falcon's Roost</span>
              <span className="schedule-title">Coffee &amp; Welcome Address</span>
              <p className="schedule-desc">
                Welcome address by Folsom Lake College Administration.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-item--student" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/flc_logo.jpg" alt="Student Presentation" />
              <div className="schedule-item-content">
                <span className="schedule-time">9:30 – 9:40 AM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Falcon Eye&rdquo;</span>
                <p className="schedule-desc">
                  Student Lightning Talk.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/ramkarthik_micron.jpeg" alt="Ramkarthik Ganesan" />
              <div className="schedule-item-content">
                <span className="schedule-time">10:00 – 10:30 AM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;From Data to Intelligence&rdquo;</span>
                <p className="schedule-desc">
                  Keynote by <strong>Ramkarthik Ganesan</strong>, Fellow at Micron Technology.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--student" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/flc_logo.jpg" alt="Student Presentation" />
              <div className="schedule-item-content">
                <span className="schedule-time">10:35 – 10:45 AM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Self-Navigating Smart Sofa&rdquo;</span>
                <p className="schedule-desc">
                  Student Lightning Talk.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/tahmid_solidigm.png" alt="Tahmid Rahman" />
              <div className="schedule-item-content">
                <span className="schedule-time">10:45 – 11:15 AM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Solidigm: Storage for AI innovation&rdquo;</span>
                <p className="schedule-desc">
                  Keynote by <strong>Tahmid Rahman</strong>, Director Product Marketing, Solidigm Corp.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--student" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/flc_logo.jpg" alt="Student Presentation" />
              <div className="schedule-item-content">
                <span className="schedule-time">11:20 – 11:30 AM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Predicting Air Quality Using Artificial Intelligence&rdquo;</span>
                <p className="schedule-desc">
                  Student Lightning Talk.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/marcie_caltrans.jpeg" alt="Marcie Kahbody" />
              <div className="schedule-item-content">
                <span className="schedule-time">11:30 AM – 12:00 PM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Building Traffic Planning &amp; Management Systems using Innovative AI Technologies&rdquo;</span>
                <p className="schedule-desc">
                  Keynote by <strong>Marcie Kahbody</strong>, CIO at Caltrans.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item" variants={itemVariants}>
              <span className="schedule-time">12:15 – 2:00 PM</span>
              <span className="schedule-location">Falcon's Roost</span>
              <span className="schedule-title">Student Demo Showcasing</span>
              <p className="schedule-desc">
                Browse student project demos, interact with teams, and see their work in action.
              </p>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/tim_aws.png" alt="Tim Jones" />
              <div className="schedule-item-content">
                <span className="schedule-time">2:00 – 2:30 PM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Why Computer Science is Essential in the Age of Generative AI&rdquo;</span>
                <p className="schedule-desc">
                  Keynote by <strong>Tim Jones</strong>, Sr. Solutions Architect at AWS.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--student" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/flc_logo.jpg" alt="Student Presentation" />
              <div className="schedule-item-content">
                <span className="schedule-time">2:35 – 2:45 PM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Designing Tiny Molecules: My Summer Research Experience&rdquo;</span>
                <p className="schedule-desc">
                  Student Lightning Talk.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/shashank_renesas.jpeg" alt="Shashank Bangalore Lakshman" />
              <div className="schedule-item-content">
                <span className="schedule-time">2:45 – 3:15 PM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;STEM Professional 2.0: Thriving on the Razor Edge of AI&rdquo;</span>
                <p className="schedule-desc">
                  Keynote by <strong>Shashank Bangalore Lakshman</strong>, Engineering Leader – MLOps, Renesas Electronics.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--student" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/flc_logo.jpg" alt="Student Presentation" />
              <div className="schedule-item-content">
                <span className="schedule-time">3:20 – 3:30 PM</span>
                <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                <span className="schedule-title">&ldquo;Investigating the Role of Fungal Enzymes in Degrading Environmental Phthalates&rdquo;</span>
                <p className="schedule-desc">
                  Student Lightning Talk.
                </p>
              </div>
            </motion.li>
            <motion.li className="schedule-item schedule-item--keynote" variants={itemVariants}>
              <img className="schedule-speaker-photo" src="/speakers/dean_lorena.jpeg" alt="Dr. Lorena Navarro" />
              <div className="schedule-item-content">
                <span className="schedule-time">3:30 – 4:00 PM</span>
                <span className="schedule-location">Falcon's Roost</span>
                <span className="schedule-title">Closing Ceremony</span>
                <p className="schedule-desc">
                  Certificates of Achievement, by Dean of STEM <strong>Dr. Lorena Navarro</strong>.
                </p>
              </div>
            </motion.li>
          </motion.ul>

        </motion.div>
      </motion.section>
    </main>
  );
}

export default Schedule;

