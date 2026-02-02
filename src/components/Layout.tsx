import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="app">
      <nav className="navbar">
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
            <Link to="/industry" className={isActive('/industry') ? 'active' : ''}>
              Industry
            </Link>
          </li>
          <li>
            <Link to="/sponsors" className={isActive('/sponsors') ? 'active' : ''}>
              Sponsors
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

