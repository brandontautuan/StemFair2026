import { Link } from 'react-router-dom';
import './Schedule.css';

function Schedule() {
  return (
    <main className="main-content">
      <section className="page-section schedule-section">
        <h1 className="page-title">Schedule</h1>
        <div className="section-content">
          <p className="section-text schedule-intro">
            The day-of schedule for April 17th at Folsom Lake College. Times and sessions 
            will be finalized closer to the event.
          </p>

          <div className="schedule-placeholder">
            <div className="schedule-skeleton">
              <div className="schedule-skeleton-row">
                <div className="schedule-skeleton-time" />
                <div className="schedule-skeleton-content">
                  <div className="schedule-skeleton-title" />
                  <div className="schedule-skeleton-desc" />
                </div>
              </div>
              <div className="schedule-skeleton-row">
                <div className="schedule-skeleton-time" />
                <div className="schedule-skeleton-content">
                  <div className="schedule-skeleton-title" />
                  <div className="schedule-skeleton-desc" />
                </div>
              </div>
              <div className="schedule-skeleton-row">
                <div className="schedule-skeleton-time" />
                <div className="schedule-skeleton-content">
                  <div className="schedule-skeleton-title" />
                  <div className="schedule-skeleton-desc" />
                </div>
              </div>
            </div>
            <p className="schedule-coming-soon">Schedule coming soon—check back for updates</p>
          </div>

          <div className="schedule-cta">
            <Link to="/event-flow" className="schedule-cta-link">View Event Flow & Key Dates →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Schedule;

