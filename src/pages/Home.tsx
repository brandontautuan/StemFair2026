import { Link } from 'react-router-dom';
import ParticleHero from '../components/ParticleHero';

function Home() {
  return (
    <>
      <div className="banner-container">
        <ParticleHero className="banner-canvas" />
        <div className="banner-text">
          <h1 className="banner-title">Los Rios STEM Fair</h1>
          <p className="banner-tagline">Learn by Doing</p>
          <p className="banner-subtitle">April 17th • Folsom Lake College</p>
        </div>
      </div>
      
      <main className="main-content">
        <section className="event-intro event-intro-compact">
          <h2 className="section-title">About the Fair</h2>
          <div className="intro-content">
            <p className="intro-text">
              The Los Rios STEM Fair is where &quot;learning by doing&quot; meets professional opportunity. We are providing a rare platform for community college students to bridge the gap between academic theory and the industry, allowing you to showcase your technical skills directly to professionals and the Los Rios Community. Whether you want to start a solo endeavor or a large-scale group project, this is your stage to present your work to those who move the industry forward.
            </p>
            <div className="key-dates-schedule-inline">
              <h3 className="key-dates-schedule-heading">Day-of Schedule</h3>
              <p className="key-dates-schedule-disclaimer">
                <strong>This schedule is prone to heavy change and is not finalized yet.</strong>
              </p>
              <p className="key-dates-schedule-intro">
                April 17th at Folsom Lake College. Times and sessions may be updated closer to the event.
              </p>
              <ul className="schedule-list" aria-label="Event schedule">
                <li className="schedule-item">
                  <span className="schedule-time">12:00 – 12:30</span>
                  <span className="schedule-title">Intro Period</span>
                  <p className="schedule-desc">
                    Guests arrive and get settled. Coffee and light refreshments will be available—a good time to mingle, chat, and connect. Tables and materials will be set up during this window.
                  </p>
                </li>
                <li className="schedule-item">
                  <span className="schedule-time">12:30 – 2:00</span>
                  <span className="schedule-title">Presentation Period</span>
                  <p className="schedule-desc">
                    Teams that opt to present will give formal presentations during this block. Attendees can watch project demos, hear from student teams, and join Q&amp;A in a structured session.
                  </p>
                </li>
                <li className="schedule-item">
                  <span className="schedule-time">2:00 – 4:00</span>
                  <span className="schedule-title">Showcase Period</span>
                  <p className="schedule-desc">
                    Teams that opt to showcase will table their projects for walk-by viewing. Visitors can browse tables, view projects, and talk with teams. Food will be served during this time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="user-funnel">
          <h2 className="section-title">How to Participate</h2>
          <p className="funnel-intro">
            April 17th at Folsom Lake College. Choose your path and get involved:
          </p>
          <div className="funnel-lanes">
            <div className="funnel-lane funnel-lane-participants">
              <h3 className="funnel-lane-title">Students &amp; Professors</h3>
              <p className="funnel-lane-desc">Present a project or research at the fair. Register and submit a proposal to get started.</p>
              <div className="funnel-ctas">
                <Link to="/register" className="cta-button cta-secondary">Register</Link>
                <a href="#" className="cta-button cta-secondary" title="Proposal form coming soon">Submit Proposal</a>
              </div>
            </div>
            <div className="funnel-lane funnel-lane-attendees">
              <h3 className="funnel-lane-title">General Attendees</h3>
              <p className="funnel-lane-desc">Attend the fair, explore projects, and connect with students and innovators. No registration required—just show up!</p>
              <Link to="/register" className="cta-button cta-secondary">Register</Link>
            </div>
            <div className="funnel-lane funnel-lane-industry">
              <h3 className="funnel-lane-title">Industry &amp; Sponsors</h3>
              <p className="funnel-lane-desc">Support the fair as a mentor, sponsor, or industry partner. Connect with emerging talent.</p>
              <Link to="/sponsors" className="cta-button cta-secondary">Get Involved</Link>
            </div>
          </div>
        </section>

        <section className="key-dates-section">
          <h2 className="section-title">Key Dates</h2>
          <div className="key-dates-list">
            <div className="key-date-item">
              <span className="key-date-label">Event Day</span>
              <span className="key-date-value">April 17th</span>
              <span className="key-date-detail">Los Rios STEM Fair at Folsom Lake College</span>
            </div>
            <div className="key-date-item">
              <span className="key-date-label">Proposal Deadline</span>
              <span className="key-date-value">TBD</span>
              <span className="key-date-detail">Submit your project proposal</span>
            </div>
            <div className="key-date-item">
              <span className="key-date-label">Team Formation</span>
              <span className="key-date-value">TBD</span>
              <span className="key-date-detail">Form teams via Discord</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

