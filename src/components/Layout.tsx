import { Link, useLocation } from 'react-router-dom';

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
            <Link to="/sponsors" className={isActive('/sponsors') ? 'active' : ''}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Layout;

