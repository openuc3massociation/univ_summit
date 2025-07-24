import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.svg";
import "../index.css";
import "../styles/components/Header.css"

const Header: FC = () => (
  <header>
    <div className="topbar">
      <div className="header-logo">
        <img src={logo} alt="Uni Summit logo" />
      </div>  
      <div className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li>AGENDA</li>
          <li>PONENTES</li>
          <li>PATROCINADORES</li>
          <button className="cta-navbar">APÚNTATE</button>
        </ul>
      </nav>
    </div>
    </div>
  </header>
);

export default Header;
