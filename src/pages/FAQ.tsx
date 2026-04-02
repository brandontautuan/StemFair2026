import { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: 'Who can submit a project?',
    answer:
      'Any student currently enrolled in a college within the Los Rios Community College District can submit a project. Whether you attend American River College, Cosumnes River College, Folsom Lake College, or Sacramento City College, you are welcome to submit!',
  },
  {
    question: 'Is there a team size limit?',
    answer:
      'No—there is no team size cap. You can participate solo or with a group of any size. That said, larger teams often find it harder to coordinate and to keep everyone actively involved, so it helps to plan how you\'ll work together.',
  },
  {
    question: 'Is prior experience required?',
    answer:
      'No prior experience is required! The STEM Fair is designed to be inclusive for participants of all skill levels. Come with curiosity and a willingness to learn.',
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

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="faq-list">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
          variants={itemVariants}
        >
          <dt
            className="faq-question"
            role="button"
            tabIndex={0}
            onClick={() => toggle(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(index); } }}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-chevron" aria-hidden="true" />
          </dt>
          <dd className="faq-answer">
            <div className="faq-answer-inner">{faq.answer}</div>
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}

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
          email us at stemfairlosrios@gmail.com or ping an admin on Discord.
        </motion.p>

        <FAQAccordion />
      </motion.section>
    </main>
  );
}

export default FAQ;
