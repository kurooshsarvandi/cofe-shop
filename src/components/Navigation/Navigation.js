import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // اول توابع رو تعریف کن
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // سپس return رو بیار
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* دکمه هامبورگر */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* لوگو */}
        <div className="nav-logo">
          <a href="#home" className="logo-link" onClick={closeMenu}>
            <span className="logo-icon">☕</span>
             Coffee Rizhvan
          </a>
        </div>

        {/* منوی اصلی */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#menu" className="nav-link" onClick={closeMenu}>Menu coffe</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About us</a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link" onClick={closeMenu}>gallery</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navigation;