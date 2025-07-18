import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.png";
import "../index.css";

const Hero: FC = () => (
  <section className="hero">
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Uni Summit logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li>AGENDA</li>
          <li>PONENTES</li>
          <li>PATROCINADORES</li>
        </ul>
      </nav>
    </div>
    <div className="overlay"/>
    <div className="content">
      <h1>Más allá de tus clases</h1>
      <p>Acércate a conocer las tres salidas de la universidad. 
        Si tienes ganas de hacer de tu experiencia en la universidad algo único, este es tu lugar!
      </p>
      <button className="cta">Sé parte del cambio</button>
    </div>
  </section>
);

export default Hero;
