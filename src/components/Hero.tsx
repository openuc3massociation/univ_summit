import React, { FC } from "react";
import "../index.css";

const Hero: FC = () => (
  <section className="hero">
    <div className="overlay"/>
    <div className="content">
      <h1>Más allá de tus clases</h1>
      <p>Acércate a conocer las tres salidas de la universidad. 
        Si tienes ganas de hacer tu experiencia...
      </p>
      <button className="cta">Sé parte del cambio</button>
    </div>
  </section>
);

export default Hero;
