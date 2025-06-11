import React, { FC } from "react";
import "../index.css";

const Hero: FC = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>“Aquí iría un slogan super inspirador”</h1>
      <p>
        Aquí iría lo que es una descripción super breve estilo. ¿Quieres
        sumergirte más en el mundo de la UC3M? o algo como el mayor evento
        universitario de emprendedores de Madrid (nuestra misión o algo así)
      </p>
      <button className="cta-button">Sé parte del cambio</button>
    </div>
    <div className="hero-image">{/* Optional hero graphic */}</div>
  </section>
);

export default Hero;
