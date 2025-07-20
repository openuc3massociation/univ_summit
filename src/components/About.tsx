import React, { FC } from "react";
import evento from "../assets/Evento_prototipo.jpg";
import "../index.css";

const About: FC = () => (
  <section className="about">
    <div className="about-content">
      <div className="about-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <div className="about-text">
        <h2>Más allá de tus clases</h2>
        <p>La Universidad es mucho más que estar sentado en el aula, lo sabemos todos bien.
            <br /><br />
           En UniSummit, te ponemos todas las opciones al alcance de tu mano. 
            <br /><br />
           Con un clic entrarás en el evento universitario más importante de España.
            <br /><br />
           Y nosotros haremos el resto...</p>
      </div>
      <div className="about-img">
        <img src={evento} alt="evento" />
      </div>
      <div className="about-lines-bottom">
        <div className="line line-3"></div>
        <div className="line line-2"></div>
        <div className="line line-1"></div>
      </div>
    </div>
  </section>
);

export default About;
