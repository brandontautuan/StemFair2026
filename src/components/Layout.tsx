import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const HERO_SCROLL_THRESHOLD = 0.85; // fraction of viewport height to consider "past hero"

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolledPastHero, setScrolledPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolledPastHero(true);
      return;
    }
    const check = () => {
      const threshold = window.innerHeight * HERO_SCROLL_THRESHOLD;
      setScrolledPastHero(window.scrollY >= threshold);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [isHome]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navbarHero = isHome && !scrolledPastHero;

  return (
    <div className="app">
      <nav className={`navbar ${navbarHero ? 'navbar--hero' : ''}`} aria-label="Main navigation">
        <ul className="nav-menu">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className={isActive('/register') ? 'active' : ''}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/event-flow" className={isActive('/event-flow') ? 'active' : ''}>
              Event Flow
            </Link>
          </li>
          <li>
            <Link to="/requirements" className={isActive('/requirements') ? 'active' : ''}>
              Requirements
            </Link>
          </li>
          <li>
            <Link to="/sponsors" className={isActive('/sponsors') ? 'active' : ''}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <div className="app-body">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

