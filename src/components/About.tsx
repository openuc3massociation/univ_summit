import React, { FC } from "react";
import evento from "../assets/Evento_prototipo.jpg";
import "../index.css";
import "../styles/components/About.css"

const About: FC = () => (
  <section className="about">
    
    <div className="about-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
    </div>

    <div className="about-content">
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
    </div>

    <div className="about-lines-bottom">
      <div className="line line-3"></div>
      <div className="line line-2"></div>
      <div className="line line-1"></div>
    </div>

    <div className="about-roadmap">
      <div className="roadmap-container">
        <div className="roadmap-timeline">
          <div className="timeline-arrow">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
          </div>
          
          <div className="roadmap-point">
            <div className="point-content content-up">
              <h3>HUB UNIVERSITARIO</h3>
              <p>Iniciativas puramente universitarias: Asociaciones, grupos de investigación... Todo lo que ofrece la uni en el campus</p>
            </div>
            <div className="point-line line-up"></div>
            <div className="point-circle"></div>
          </div>
          
          <div className="roadmap-point">
            <div className="point-circle"></div>
            <div className="point-line line-down"></div>
            <div className="point-content content-down">
              <h3>EMPRENDIMIENTO</h3>
              <p>Con la experiencia que aporta la uni, y tus ganas, emprender es una de las elecciones más completas</p>
            </div>
          </div>
          
          <div className="roadmap-point">
            <div className="point-content content-up">
              <h3>EMPRESAS</h3>
              <p>Cuando acabas la carrera, siempre surge la pregunta "¿Y ahora qué?". Descubre qué hay después de la universidad</p>
            </div>
            <div className="point-line line-up"></div>
            <div className="point-circle"></div>
          </div>
        </div>
      </div>
    </div>  

  </section>
);

export default About;
