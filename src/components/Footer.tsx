import './Footer.css';

const DISCORD_URL = 'https://discord.gg/twRRrEyANK';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-contact">
          <strong>Questions?</strong> Email us at{' '}
          <a href="mailto:abaanmajid15@gmail.com">abaanmajid15@gmail.com</a>
          {' '}or ping an <strong>admin role</strong> on our{' '}
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Los Rios STEM Fair</p>
      </div>
    </footer>
  );
}

export default Footer;
