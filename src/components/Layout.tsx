import { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const HERO_SCROLL_THRESHOLD = 0.85;

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolledPastHero, setScrolledPastHero] = useState(!isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [moreOpen]);

  // Close mobile menu on scroll so it doesn't interfere with hero transition
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onScroll = () => setMobileMenuOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

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

  // Force solid background when mobile menu is open so text is readable
  const navbarHero = isHome && !scrolledPastHero && !mobileMenuOpen;

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${navbarHero ? 'navbar--hero' : ''}`} aria-label="Main navigation">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" aria-label="Home">
            <img src="/logo.svg" alt="" className="nav-logo-img" />
          </Link>
          <button
            className={`nav-hamburger ${mobileMenuOpen ? 'nav-hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
          </button>
          <ul
            ref={menuRef}
            className={`nav-menu ${mobileMenuOpen ? 'nav-menu--open' : ''}`}
          >
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/schedule" className={isActive('/schedule') ? 'active' : ''}>
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
            <li
              ref={moreRef}
              className={`nav-dropdown ${moreOpen ? 'nav-dropdown--open' : ''} ${isActive('/event-flow') || isActive('/sponsors') ? 'nav-dropdown--child-active' : ''}`}
            >
              <button
                className="nav-dropdown-toggle"
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                type="button"
              >
                More <span className="nav-dropdown-arrow" aria-hidden="true">&#9662;</span>
              </button>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/event-flow" className={isActive('/event-flow') ? 'active' : ''}>
                    Important Dates
                  </Link>
                </li>
                <li>
                  <Link to="/sponsors" className={isActive('/sponsors') ? 'active' : ''}>
                    Sponsors
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-register-mobile">
              <Link to="/register" className={`nav-register-btn nav-register-btn--mobile ${isActive('/register') ? 'nav-register-btn--active' : ''}`}>
                Register
              </Link>
            </li>
          </ul>
          <Link to="/register" className={`nav-register-btn nav-register-btn--desktop ${isActive('/register') ? 'nav-register-btn--active' : ''}`}>
            Register
          </Link>
          <div className="nav-sponsor-wrap">
            <span className="nav-sponsor-label">Proudly sponsored by</span>
            <div className="nav-sponsor-logos">
              <a
                href="https://www.inductiveautomation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-sponsor"
                aria-label="Inductive Automation - Sponsor"
              >
                <img
                  src="/sponsor_logos/Inductive_Automation_logo.png"
                  alt="Inductive Automation"
                  className="nav-sponsor-img"
                />
              </a>
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-sponsor"
                aria-label="Amazon Web Services - Sponsor"
              >
                <img
                  src="/sponsor_logos/aws-sponsor.webp"
                  alt="Amazon Web Services"
                  className="nav-sponsor-img"
                />
              </a>
            </div>
          </div>
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

