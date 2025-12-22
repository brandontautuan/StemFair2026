function Home() {
  return (
    <>
      <div className="banner-container">
        <img src="/banner_image.jpg" alt="LRCCD STEM Fair Banner" className="banner-image" />
        <div className="banner-text">
          <h1 className="banner-title">LRCCD STEM Fair</h1>
          <p className="banner-subtitle">April 26th • FLC Main Campus</p>
        </div>
      </div>
      
      <main className="main-content">
        <section className="event-intro">
          <h2 className="section-title">Welcome to the LRCCD STEM Fair</h2>
          <div className="intro-content">
            <p className="intro-text">
              Join us for an exciting celebration of innovation, creativity, and scientific discovery! 
              The LRCCD STEM Fair brings together talented students from across the Los Rios Community 
              College District to showcase their groundbreaking projects, research, and technological innovations.
            </p>
            <p className="intro-text">
              This is your opportunity to explore the incredible work being done by our students in 
              Science, Technology, Engineering, and Mathematics. From cutting-edge research to 
              practical solutions addressing real-world challenges, you'll witness the future of STEM 
              unfold before your eyes.
            </p>
            <p className="intro-text">
              Whether you're a student looking to present your project, a community member eager to 
              learn about the latest innovations, or an educator interested in supporting student 
              achievement, the LRCCD STEM Fair offers something for everyone. Come be inspired by 
              the next generation of scientists, engineers, and innovators!
            </p>
          </div>
        </section>

        <section className="speakers-section">
          <h2 className="section-title">Featured Speakers</h2>
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

