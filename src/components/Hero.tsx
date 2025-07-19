import React, { FC, useEffect, useState } from "react";
import logo from "../assets/UniSummitLetrasBlancas.png";
import "../index.css";

const Hero: FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-12T00:00:00').getTime();// Fecha a cambiar)

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
    <div className="content">
      <h1>Tu uni es más de lo que crees...</h1>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
        </div>
      </div>
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
};

export default Hero;