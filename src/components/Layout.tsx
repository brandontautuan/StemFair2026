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
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" aria-label="Home">
            <img src="/logo.svg" alt="" className="nav-logo-img" />
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/event-flow" className={isActive('/event-flow') ? 'active' : ''}>
                Important Dates
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/sponsors" className={isActive('/sponsors') ? 'active' : ''}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="app-body">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

