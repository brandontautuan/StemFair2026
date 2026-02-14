import { motion } from 'framer-motion';

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

function Teams() {
  return (
    <main className="main-content">
      <motion.section
        className="page-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title" variants={itemVariants}>
          Teams
        </motion.h1>
        <motion.div className="section-content" variants={containerVariants}>
          <motion.p className="section-text" variants={itemVariants}>
            Meet the talented student teams participating in the LRCCD STEM Fair. Each team 
            has worked diligently to develop innovative projects that showcase their skills 
            and creativity in STEM fields.
          </motion.p>
          <motion.div className="teams-grid" variants={containerVariants}>
            <motion.div className="team-card" variants={itemVariants}>
              <h3 className="team-name">Team Name</h3>
              <p className="team-project">Project Title</p>
              <p className="team-description">
                Brief description of the team's project and focus area.
              </p>
            </motion.div>
            <motion.div className="team-card" variants={itemVariants}>
              <h3 className="team-name">Team Name</h3>
              <p className="team-project">Project Title</p>
              <p className="team-description">
                Brief description of the team's project and focus area.
              </p>
            </motion.div>
            <motion.div className="team-card" variants={itemVariants}>
              <h3 className="team-name">Team Name</h3>
              <p className="team-project">Project Title</p>
              <p className="team-description">
                Brief description of the team's project and focus area.
              </p>
            </motion.div>
            <motion.div className="team-card" variants={itemVariants}>
              <h3 className="team-name">Team Name</h3>
              <p className="team-project">Project Title</p>
              <p className="team-description">
                Brief description of the team's project and focus area.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default Teams;

