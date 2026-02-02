const INTEREST_FORM_URL = 'https://forms.gle/evzMxp7bMHRrw8eJA';

function Register() {
  return (
    <main className="main-content">
      <section className="page-section register-section">
        <h1 className="page-title">Register Your Interest</h1>
        <p className="section-text register-intro">
          Fill out the form below to register your interest in the Los Rios STEM Fair. 
          Join our Discord to stay updated on announcements and team formation.
        </p>
        <div className="form-embed-container">
          <iframe
            src={`${INTEREST_FORM_URL}?embedded=true`}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="2026 STEM Fair Interest Form"
          >
            Loading…
          </iframe>
        </div>
        <p className="form-fallback">
          If the form doesn&apos;t load,{' '}
          <a href={INTEREST_FORM_URL} target="_blank" rel="noopener noreferrer">
            open it in a new tab
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default Register;

