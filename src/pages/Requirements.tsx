import { Link } from 'react-router-dom';
import './Requirements.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';
const INTEREST_FORM_URL = 'https://forms.gle/evzMxp7bMHRrw8eJA';

function Requirements() {
  return (
    <main className="main-content">
      <section className="requirements-section">
        <h1 className="page-title requirements-title">Requirements & Links</h1>
        <p className="requirements-intro">
          All the links you need to participate in the Los Rios STEM Fair. Complete these steps to register, 
          form teams, and submit your proposal.
        </p>

        <div className="requirements-list">
          <div className="requirement-card">
            <div className="requirement-icon" aria-hidden>#</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Discord</h2>
              <p className="requirement-desc">
                Join our Discord server for announcements, team formation, and event coordination. 
                Discord is required for Phase 2.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="requirement-link"
              >
                Join Discord →
              </a>
            </div>
          </div>

          <div className="requirement-card">
            <div className="requirement-icon" aria-hidden>📋</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Interest Form</h2>
              <p className="requirement-desc">
                Register your interest in participating. Complete this form to express your intent 
                and help us organize the fair.
              </p>
              <Link to="/register" className="requirement-link">
                Fill Interest Form →
              </Link>
            </div>
          </div>

          <div className="requirement-card requirement-card-placeholder">
            <div className="requirement-icon" aria-hidden>📄</div>
            <div className="requirement-content">
              <h2 className="requirement-name">Proposal Form</h2>
              <p className="requirement-desc">
                Submit your project proposal. This form will be available soon—check back later or 
                join Discord for updates.
              </p>
              <span className="requirement-placeholder">Coming soon</span>
            </div>
          </div>
        </div>

        <div className="requirements-cta">
          <Link to="/event-flow" className="requirements-cta-link">
            View the full Event Flow →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Requirements;
