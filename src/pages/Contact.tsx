import { motion } from 'framer-motion';
import './Contact.css';

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

function Contact() {
  return (
    <main className="main-content">
      <motion.section
        className="contact-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title contact-title" variants={itemVariants}>
          Contact Us
        </motion.h1>
        <motion.p className="contact-intro" variants={itemVariants}>
          Have questions about the Los Rios STEM Fair? We&apos;d love to hear from you.
          Reach out via email or connect with us on Discord.
        </motion.p>

        <motion.div className="contact-cards" variants={containerVariants}>
          {/* Email Card */}
          <motion.div className="contact-card" variants={itemVariants}>
            <span className="contact-card-icon" aria-hidden="true">✉</span>
            <h2 className="contact-card-title">Email</h2>
            <p className="contact-card-text">
              Send us an email and we&apos;ll get back to you as soon as possible.
            </p>
            <ul className="contact-email-list">
              <li className="contact-email-item">
                <span className="contact-email-label">General Inquiries</span>
                <span className="contact-email-address">
                  <a href="mailto:abaanmajid15@gmail.com">abaanmajid15@gmail.com</a>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Discord Card */}
          <motion.div className="contact-card" variants={itemVariants}>
            <span className="contact-card-icon" aria-hidden="true">💬</span>
            <h2 className="contact-card-title">Discord</h2>
            <p className="contact-card-text">
              Join our Discord server to stay connected with the STEM Fair community.
              It&apos;s the primary hub for announcements, team formation, event coordination,
              and real-time support. Ping an <strong>admin role</strong> if you need help.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-discord-button"
            >
              Join Discord →
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default Contact;
