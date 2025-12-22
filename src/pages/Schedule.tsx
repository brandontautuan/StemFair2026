function Schedule() {
  return (
    <main className="main-content">
      <section className="page-section">
        <h1 className="page-title">Schedule</h1>
        <div className="section-content">
          <p className="section-text">
            View the complete schedule of events for the LRCCD STEM Fair. Plan your day to 
            make the most of this exciting opportunity to explore student projects and attend 
            featured presentations.
          </p>
          <div className="schedule-container">
            <div className="schedule-item">
              <div className="schedule-time">9:00 AM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Opening Ceremony</h3>
                <p className="schedule-description">Welcome remarks and event overview</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">10:00 AM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Project Showcase Begins</h3>
                <p className="schedule-description">Student projects open for viewing</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">12:00 PM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Lunch Break</h3>
                <p className="schedule-description">Networking and refreshments</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">1:00 PM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Featured Presentations</h3>
                <p className="schedule-description">Guest speakers and special sessions</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">3:00 PM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Awards Ceremony</h3>
                <p className="schedule-description">Recognition of outstanding projects</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">4:00 PM</div>
              <div className="schedule-details">
                <h3 className="schedule-title">Closing Remarks</h3>
                <p className="schedule-description">Event conclusion and thank you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Schedule;

