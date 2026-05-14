import { Link, useLocation } from 'react-router-dom';
import { Leaf, MapPin, BookOpen, Download, MessageSquare } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio', icon: <Leaf size={18} /> },
    { path: '/mapa', label: 'Mapa Interactivo', icon: <MapPin size={18} /> },
    { path: '/materiales', label: 'Materiales', icon: <BookOpen size={18} /> },
    { path: '/kit', label: 'Kit Hogar', icon: <Download size={18} /> },
    { path: '/participa', label: 'Participa', icon: <MessageSquare size={18} /> },
  ];

  return (
    <header className="header glass-card">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Leaf className="logo-icon" />
          <span>Wiki Recicla</span>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
