// components/Header.jsx
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <img src="/public/imagem/lg.png" alt="MinhaEmpresa" className="footer-logo-img" />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" className="nav-item">Início</a></li>
          <li><a href="#sobre" className="nav-item">Sobre</a></li>
          <li><a href="#servicos" className="nav-item">Certificações</a></li>
          <li><a href="#contato" className="nav-item">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
