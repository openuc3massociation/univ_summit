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
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo-nav" />
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#agenda">AGENDA</a>
          </li>
          <li>
            <a href="#speakers">PONENTES</a>
          </li>
          <li>
            <a href="#sponsors">PATROCINADORES</a>
          </li>
          <li>
            <a href="#faq">F&amp;Q</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
