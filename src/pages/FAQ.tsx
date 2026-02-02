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

function FAQ() {
  return (
    <main className="main-content">
      <section className="faq-section">
        <h1 className="page-title faq-title">Frequently Asked Questions</h1>
        <p className="faq-intro">
          Have questions about the Los Rios STEM Fair? Find answers below. For additional help, 
          reach out via email or ping an admin on Discord.
        </p>

        <dl className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <dt className="faq-question">{faq.question}</dt>
              <dd className="faq-answer">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}

export default FAQ;
