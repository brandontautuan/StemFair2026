import './Industry.css';

const INDUSTRY_FORM_URL = '#'; // Placeholder—add when available

function Industry() {
  return (
    <main className="main-content">
      <section className="industry-section">
        <h1 className="page-title industry-title">Industry &amp; Mentors</h1>
        <p className="industry-intro">
          Are you an industry professional interested in attending the Los Rios STEM Fair? 
          We welcome mentors, judges, recruiters, and professionals who want to connect with 
          emerging STEM talent and support student innovation.
        </p>

        <div className="industry-benefits">
          <h2 className="industry-subtitle">Why Get Involved?</h2>
          <ul className="industry-list">
            <li>Connect with talented students and their innovative projects</li>
            <li>Mentor and provide feedback to the next generation of STEM professionals</li>
            <li>Network with faculty, peers, and potential collaborators</li>
            <li>Support student success and STEM education in the Los Rios community</li>
          </ul>
        </div>

        <div className="industry-cta-card">
          <h2 className="industry-cta-title">Register Your Interest</h2>
          <p className="industry-cta-desc">
            Fill out the form below to let us know you&apos;re interested in attending as an industry 
            professional or mentor. We&apos;ll reach out with more details.
          </p>
          {INDUSTRY_FORM_URL !== '#' ? (
            <a
              href={INDUSTRY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-cta-button"
            >
              Open Industry Form →
            </a>
          ) : (
            <span className="industry-placeholder">Form coming soon—check back later or email abaanmajid15@gmail.com</span>
          )}
        </div>
      </section>
    </main>
  );
}

export default Industry;
