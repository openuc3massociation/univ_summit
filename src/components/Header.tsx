import React, { FC, useState } from "react";
import logo from "../assets/UniSummitLetrasBlancas.svg";
import "../index.css";
import "../styles/components/Header.css"

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="topbar">
        <div className="header-logo">
          <img src={logo} alt="Uni Summit logo" />
        </div>  
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation */}
        <div className={`header ${isMenuOpen ? 'nav-open' : ''}`}>
          <nav className="header-nav">
            <ul className="header-menu">
              <li onClick={closeMenu}>AGENDA</li>
              <li onClick={closeMenu}>PONENTES</li>
              <li onClick={closeMenu}>PATROCINADORES</li>
              <button className="cta-navbar" onClick={closeMenu}>APÚNTATE</button>
            </ul>
          </nav>
        </div>
        
        {/* Overlay for mobile */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
