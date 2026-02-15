import { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: 'Who can participate?',
    answer:
      'The STEM Fair is open to all students currently enrolled in a college within the Los Rios Community College District. Whether you attend American River College, Cosumnes River College, Folsom Lake College, or Sacramento City College, you are welcome to participate!',
  },
  {
    question: 'What is the team size limit?',
    answer:
      'Teams can have up to 6 members. You are also welcome to participate individually or in a smaller group.',
  },
  {
    question: 'Is prior experience required?',
    answer:
      'No prior experience is required! The STEM Fair is designed to be inclusive for participants of all skill levels. Come with curiosity and a willingness to learn.',
  },
  {
    question:
      'If I\'m already part of a participating project, do I still need to register to attend?',
    answer:
      'No — if you are already on a registered project team, you do not need to separately register as an attendee. Your project registration covers your participation.',
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
          reach out via email or ping an admin on Discord.
        </motion.p>

        <FAQAccordion />
      </motion.section>
    </main>
  );
}

export default FAQ;
