import { motion } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'Coming soon',
  },
  {
    question: 'What is the team size?',
    answer: 'TBD',
  },
  {
    question: 'Is prior experience required?',
    answer: 'Coming soon',
  },
];

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

function FAQ() {
  return (
    <main className="main-content">
      <motion.section
        className="faq-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title faq-title" variants={itemVariants}>
          Frequently Asked Questions
        </motion.h1>
        <motion.p className="faq-intro" variants={itemVariants}>
          Have questions about the Los Rios STEM Fair? Find answers below. For additional help, 
          reach out via email or ping an admin on Discord.
        </motion.p>

        <dl className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="faq-item" variants={itemVariants}>
              <dt className="faq-question">{faq.question}</dt>
              <dd className="faq-answer">{faq.answer}</dd>
            </motion.div>
          ))}
        </dl>
      </motion.section>
    </main>
  );
}

export default FAQ;
