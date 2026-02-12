import { Link } from 'react-router-dom';
import './GetInvolved.css';

const SPONSORSHIP_FORM_URL = '#';

function GetInvolved() {
  return (
    <main className="main-content">
      <section className="get-involved-section">
        <h1 className="page-title get-involved-title">Get Involved</h1>
        <p className="get-involved-intro">
          Industry professionals, mentors, and sponsors—support the Los Rios STEM Fair and 
          connect with emerging talent.
        </p>

        {/* Industry / Mentors Section */}
        <div className="involved-block involved-industry">
          <h2 className="involved-block-title">Industry &amp; Mentors</h2>
          <p className="involved-block-desc">
            Are you an industry professional interested in attending? We welcome mentors, judges, 
            recruiters, and professionals who want to connect with students and support innovation.
          </p>
          <ul className="involved-list">
            <li>Connect with talented students and their projects</li>
            <li>Mentor and provide feedback to the next generation</li>
            <li>Network with faculty, peers, and collaborators</li>
          </ul>
          <Link to="/sponsors#industry" className="involved-cta">
            Open Industry Form →
          </Link>
        </div>

        {/* Sponsors Section */}
        <div className="involved-block involved-sponsors">
          <h2 className="involved-block-title">Sponsors</h2>
          <p className="involved-block-desc">
            We are grateful to our sponsors for supporting the Los Rios STEM Fair. 
            Your contribution helps make this event possible.
          </p>
          {SPONSORSHIP_FORM_URL !== '#' ? (
            <a
              href={SPONSORSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="involved-cta"
            >
              Open Sponsorship Form →
            </a>
          ) : (
            <span className="involved-placeholder">Sponsorship Form coming soon—email abaanmajid15@gmail.com</span>
          )}

          <div className="sponsor-tier gold-tier">
            <h3 className="tier-title">Gold Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="sponsor-card gold-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsor-tier silver-tier">
            <h3 className="tier-title">Silver Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="sponsor-card silver-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsor-tier bronze-tier">
            <h3 className="tier-title">Bronze Sponsors (Coming Soon)</h3>
            <div className="sponsors-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="sponsor-card bronze-card">
                  <div className="sponsor-logo">Logo</div>
                  <h3 className="sponsor-name">Sponsor Name</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetInvolved;
