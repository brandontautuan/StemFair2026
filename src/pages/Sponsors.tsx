const SPONSORSHIP_FORM_URL = '#'; // Placeholder—add when available

function Sponsors() {
  return (
    <main className="main-content">
      <section className="page-section sponsors-section">
        <h1 className="page-title">Sponsors</h1>
        <div className="section-content">
          <p className="section-text">
            We are grateful to our sponsors for their generous support of the Los Rios STEM Fair. 
            Their contributions help make this event possible and enable students to showcase 
            their innovative work.
          </p>

          <div className="info-card sponsors-cta-card">
            <h2 className="info-title">Become a Sponsor</h2>
            <p className="info-text">
              Interested in supporting the Los Rios STEM Fair? Fill out the Sponsorship Form to express 
              your interest, or contact us at abaanmajid15@gmail.com to learn more about sponsorship 
              opportunities and how your organization can contribute to student success in STEM fields.
            </p>
            {SPONSORSHIP_FORM_URL !== '#' ? (
              <a
                href={SPONSORSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsors-form-cta"
              >
                Open Sponsorship Form →
              </a>
            ) : (
              <span className="sponsors-form-placeholder">Sponsorship Form coming soon—email abaanmajid15@gmail.com in the meantime</span>
            )}
          </div>

          {/* Gold Sponsors Section */}
          <div className="sponsor-tier gold-tier">
            <h2 className="tier-title">Gold Sponsors (Coming Soon)</h2>
            <div className="sponsors-grid">
              <div className="sponsor-card gold-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card gold-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card gold-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
            </div>
          </div>

          {/* Silver Sponsors Section */}
          <div className="sponsor-tier silver-tier">
            <h2 className="tier-title">Silver Sponsors (Coming Soon)</h2>
            <div className="sponsors-grid">
              <div className="sponsor-card silver-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card silver-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card silver-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card silver-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
            </div>
          </div>

          {/* Bronze Sponsors Section */}
          <div className="sponsor-tier bronze-tier">
            <h2 className="tier-title">Bronze Sponsors (Coming Soon)</h2>
            <div className="sponsors-grid">
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
              <div className="sponsor-card bronze-card">
                <div className="sponsor-logo">Logo</div>
                <h3 className="sponsor-name">Sponsor Name</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sponsors;
