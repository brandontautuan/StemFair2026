import { Link } from 'react-router-dom';
import ParticleHero from '../components/ParticleHero';

function Home() {
  return (
    <>
      <div className="banner-container">
        <ParticleHero className="banner-canvas" />
        <div className="banner-text">
          <h1 className="banner-title">Los Rios STEM Fair</h1>
          <p className="banner-subtitle">April 17th • Folsom Lake College</p>
        </div>
      </div>
      
      <main className="main-content">
        <section className="event-intro">
          <h2 className="section-title">Welcome to the Los Rios STEM Fair</h2>
          <div className="intro-content">
            <p className="intro-text">
              The Los Rios STEM Fair is an annual event that celebrates innovation, creativity, and 
              scientific discovery within the Los Rios Community College District. This event 
              provides a platform for students to showcase their projects, research, and 
              technological innovations.
            </p>
            <p className="intro-text">
              Join us for an exciting celebration! The Los Rios STEM Fair brings together talented 
              students from across the district to showcase their groundbreaking projects and 
              technological innovations. From cutting-edge research to practical solutions 
              addressing real-world challenges, you'll witness the future of STEM unfold before 
              your eyes.
            </p>
            <div className="info-card">
              <h2 className="info-title">Our Mission</h2>
              <p className="info-text">
                To inspire and recognize excellence in Science, Technology, Engineering, and 
                Mathematics by providing students with opportunities to present their work, 
                connect with peers and professionals, and gain valuable experience in their 
                chosen fields.
              </p>
            </div>
            <div className="info-card">
              <h2 className="info-title">Event Details</h2>
              <p className="info-text">
                <strong>Event:</strong> Los Rios STEM Fair<br />
                <strong>Date:</strong> April 17th<br />
                <strong>Location:</strong> Folsom Lake College<br />
                <strong>Time:</strong> All day event
              </p>
            </div>
          </div>
        </section>

        <section className="user-funnel">
          <h2 className="section-title">How to Participate</h2>
          <p className="funnel-intro">Choose your path based on how you'd like to be involved:</p>
          <div className="funnel-lanes">
            <div className="funnel-lane funnel-lane-participants">
              <h3 className="funnel-lane-title">Students &amp; Professors</h3>
              <p className="funnel-lane-desc">Present a project or research at the fair. Register and submit a proposal to get started.</p>
              <div className="funnel-ctas">
                <Link to="/register" className="cta-button cta-primary">Register</Link>
                <a href="#" className="cta-button cta-primary" title="Proposal form coming soon">Submit Proposal</a>
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
              <div className="funnel-ctas">
                <Link to="/industry" className="cta-button cta-secondary">Industry / Mentor</Link>
                <Link to="/sponsors" className="cta-button cta-secondary">Sponsors</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="key-dates-section">
          <h2 className="section-title">Key Dates</h2>
          <div className="key-dates-list">
            <div className="key-date-item key-date-highlight">
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
          <Link to="/schedule" className="key-dates-link">View full schedule →</Link>
        </section>

        <section className="speakers-section">
          <h2 className="section-title">Featured Speakers (Coming Soon)</h2>
          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="/template_profile_pic.jpg" alt="Speaker 1" />
              </div>
              <h3 className="speaker-name">Speaker Name</h3>
              <p className="speaker-title">Title/Organization</p>
              <p className="speaker-bio">Brief bio or topic description will appear here.</p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="/template_profile_pic.jpg" alt="Speaker 2" />
              </div>
              <h3 className="speaker-name">Speaker Name</h3>
              <p className="speaker-title">Title/Organization</p>
              <p className="speaker-bio">Brief bio or topic description will appear here.</p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="/template_profile_pic.jpg" alt="Speaker 3" />
              </div>
              <h3 className="speaker-name">Speaker Name</h3>
              <p className="speaker-title">Title/Organization</p>
              <p className="speaker-bio">Brief bio or topic description will appear here.</p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="/template_profile_pic.jpg" alt="Speaker 4" />
              </div>
              <h3 className="speaker-name">Speaker Name</h3>
              <p className="speaker-title">Title/Organization</p>
              <p className="speaker-bio">Brief bio or topic description will appear here.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

