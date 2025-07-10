import React, { FC } from "react";
import logo from "../assets/Meta-Emblem.png";
import "../index.css";

const Header: FC = () => (
  <header>
    <div className="topbar">
      <span>UNIV SUMMIT MADRID</span>
      <span className="separator">|</span>
      <span>FECHA</span>
      <span className="separator">|</span>
      <span>LUGAR</span>
    </div>
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Uni Summit logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li>Agenda</li>
          <li>Ponentes</li>
          <li>Patrocinadores</li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
