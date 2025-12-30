function About() {
  return (
    <main className="main-content">
      <section className="page-section">
        <h1 className="page-title">About</h1>
        <div className="section-content">
          <p className="section-text">
            The Los Rios STEM Fair is an annual event that celebrates innovation, creativity, and 
            scientific discovery within the Los Rios Community College District. This event 
            provides a platform for students to showcase their projects, research, and 
            technological innovations.
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
              <strong>Date:</strong> April 10th, 2026<br />
              <strong>Location:</strong> FLC Main Campus<br />
              <strong>Time:</strong> All day event<br />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

