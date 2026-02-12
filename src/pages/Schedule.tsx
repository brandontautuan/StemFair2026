import { Link } from 'react-router-dom';
import './Schedule.css';

function Schedule() {
  return (
    <main className="main-content">
      <section className="page-section schedule-section">
        <h1 className="page-title">Schedule</h1>
        <div className="section-content">
          <p className="schedule-disclaimer">
            <strong>This schedule is prone to heavy change and is not finalized yet.</strong>
          </p>
          <p className="section-text schedule-intro">
            The day-of schedule for April 17th at Folsom Lake College. Times and sessions may be updated closer to the event.
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

          <div className="schedule-cta">
            <Link to="/event-flow" className="schedule-cta-link">View Event Flow & Key Dates →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Schedule;

