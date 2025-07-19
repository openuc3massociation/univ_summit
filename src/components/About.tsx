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
        <h2>¿Qué es Uni Summit?</h2>
        <p>Es el evento del año, de aquí sales empresario/a millonario, vas a salir más inspirado que después de un paseo por la playa. 
  No dudes en apuntarte, si no pues nada te vas a perder el eventazo del año. Después de esto tu futuro de éxito está asegurado ;) (aquí iría una descripción mejor que esta :)
        </p>
      </div>
      <div className="about-img">
        <img src={evento} alt="evento" />
      </div>
    </div>
  </section>
);

export default About;
