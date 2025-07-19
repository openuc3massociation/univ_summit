import React, { FC } from "react";
import logo from "../assets/UniSummitLetrasBlancas.png";
import "../index.css";

const Hero: FC = () => (
  <section className="hero">
    <div className="content">
      <h1>Tu uni es más de lo que crees...</h1>
      <div className="email-container">
        <input type="email" placeholder="¡Apúntate!" className="email-input" />
        <button className="email-button">
          <span>→</span>
        </button>
      </div>
      <p>4 años, 1.461 días, 35.064 horas, 2.103.840 minutos y 126.230.400 segundos. 
        <br /><br />
      Demasiado tiempo dura tu etapa universitaria como para dedicarla solo a las clases y a los exámenes. 
      </p>
      <br /><br />
      <p className="cta">Es hora de cambiar eso</p>
    </div>
  </section>
);

export default Hero;
