import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">MeuSite</div>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/login">Login</Link>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'hide' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
