import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const GOOGLE_FORM_URL = "#"; // TODO: replace with your real Google Form link

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariant = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const App: React.FC = () => {
  return (
    <div className="page">
      {/* Floating accent shapes */}
      <motion.div
        className="float-circle float-circle--one"
        variants={floatingVariant}
        animate="animate"
      />
      <motion.div
        className="float-circle float-circle--two"
        variants={floatingVariant}
        animate="animate"
      />

      <header className="hero">
        <div className="hero-inner">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-tag">Future Frontiers • Science & Technology</p>
            <h1 className="hero-title">Aurora Science & Tech Fair</h1>
            <p className="hero-subtitle">
              A one-day celebration of curiosity, creativity, and hands-on
              experimentation. Explore interactive exhibits, student projects,
              live demos, and emerging technologies that are quietly shaping
              tomorrow.
            </p>

            {/* Placeholder button for Google Form */}
            <div className="hero-actions">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Pre-Register (Google Form Coming Soon)
              </a>
              <button className="btn btn-ghost">
                Download Info Packet (Placeholder)
              </button>
            </div>

            <p className="hero-meta">
              Saturday • April 26 • 10:00 AM – 4:00 PM • Campus Innovation
              Center
            </p>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="hero-card-title">What to Expect</h2>
            <ul className="hero-card-list">
              <li>Hands-on demos in robotics, AI, and environmental science</li>
              <li>Student-led project showcases and mini-talks</li>
              <li>Interactive maker corner and rapid-build challenges</li>
              <li>Guest speakers from local tech and research labs</li>
            </ul>
            <p className="hero-card-footnote">
              All copy here is placeholder text — swap it with real fair
              details later.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="main">
        <motion.section
          className="section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">About the Fair</h2>
          <p className="section-text">
            The Aurora Science & Tech Fair is a campus-wide event designed to
            bring together students, educators, and community members around
            creative science and technology projects. Every booth is a small
            experiment in turning questions into prototypes, diagrams, and
            interactive demos.
          </p>
          <p className="section-text">
            The current text is deliberately generic “filler” content so that
            you can wire up layout, colors, and animations first. Later, you can
            replace this with actual descriptions, partners, and logistics.
          </p>
        </motion.section>

        <motion.section
          className="section section-grid"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-header">
            <h2 className="section-title">Featured Zones</h2>
            <p className="section-text">
              Visitors can wander through themed spaces that mix demos, short
              talks, and quick hands-on activities. Each zone is intentionally
              broad so you can drop in almost any kind of project.
            </p>
          </div>

          <div className="card-grid">
            <motion.article
              className="info-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
            >
              <h3 className="info-card-title">AI & Data Lab</h3>
              <p className="info-card-text">
                Simple models, visual demos, and playful experiments that show
                how computers can recognize patterns, generate predictions, and
                assist with everyday tasks.
              </p>
            </motion.article>

            <motion.article
              className="info-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
            >
              <h3 className="info-card-title">Robotics & Control</h3>
              <p className="info-card-text">
                From line-following creatures to gesture-controlled projects,
                this zone is all about motion, sensors, and autonomous systems
                navigating the physical world.
              </p>
            </motion.article>

            <motion.article
              className="info-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
            >
              <h3 className="info-card-title">Environment & Space</h3>
              <p className="info-card-text">
                Climate dashboards, habitat simulations, and speculative
                prototypes that imagine how science can support life on Earth
                and beyond.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          className="section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Sample Schedule</h2>
          <p className="section-text">
            Swap these placeholder time blocks with the real program once the
            agenda is finalized.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">10:00 AM</div>
              <div className="timeline-content">
                Opening remarks and quick welcome demo in the main atrium.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">11:00 AM – 1:00 PM</div>
              <div className="timeline-content">
                Exhibit floor open, lightning talks rotating every 20 minutes.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">1:30 PM</div>
              <div className="timeline-content">
                Guest speaker session featuring a local researcher or engineer.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">3:00 PM</div>
              <div className="timeline-content">
                Project highlights showcase and informal Q&amp;A with presenters.
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section section-grid"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-header">
            <h2 className="section-title">Get Involved</h2>
            <p className="section-text">
              These roles are just placeholders — rename them to match whatever
              the fair actually needs: presenters, workshop hosts, volunteers,
              sponsors, or judges.
            </p>
          </div>

          <div className="card-grid">
            <motion.article
              className="info-card info-card--soft"
              whileHover={{ y: -4 }}
            >
              <h3 className="info-card-title">Present a Project</h3>
              <p className="info-card-text">
                Bring a prototype, a poster, a live demo, or even a work-in-
                progress. The fair is designed to highlight the process, not
                just the polished result.
              </p>
            </motion.article>
            <motion.article
              className="info-card info-card--soft"
              whileHover={{ y: -4 }}
            >
              <h3 className="info-card-title">Volunteer Crew</h3>
              <p className="info-card-text">
                Help with setup, visitor flow, photography, or tech support.
                It’s an easy way to meet people who care about the same topics.
              </p>
            </motion.article>
            <motion.article
              className="info-card info-card--soft"
              whileHover={{ y: -4 }}
            >
              <h3 className="info-card-title">Community Partners</h3>
              <p className="info-card-text">
                Local organizations can host a table, run a demo, or sponsor
                specific zones. Replace this text with real partner info later.
              </p>
            </motion.article>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Aurora Science & Tech Fair • All event
          names and details here are placeholder content for layout and styling
          only.
        </p>
      </footer>
    </div>
  );
};

export default App;
