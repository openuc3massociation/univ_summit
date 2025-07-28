import React, { FC, useEffect, useState } from "react";
import "../index.css";
import "../styles/components/Hero.css"
import semicirculos from "../assets/Semicirculos-hero-izqda.png"
import circulo from "../assets/Circulo_hero.svg"
import elipse from "../assets/Semicirculo-simple.png"

const Hero: FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [animatedTime, setAnimatedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Función para animar números
  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Actualizar contador en tiempo real
  useEffect(() => {
    const targetDate = new Date('2026-02-12T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Animar cuando cambian los valores
  useEffect(() => {
    const animationDuration = 800; // 800ms de duración

    animateValue(animatedTime.days, timeLeft.days, animationDuration, (value) => {
      setAnimatedTime(prev => ({ ...prev, days: value }));
    });

    animateValue(animatedTime.hours, timeLeft.hours, animationDuration, (value) => {
      setAnimatedTime(prev => ({ ...prev, hours: value }));
    });

    animateValue(animatedTime.minutes, timeLeft.minutes, animationDuration, (value) => {
      setAnimatedTime(prev => ({ ...prev, minutes: value }));
    });

    animateValue(animatedTime.seconds, timeLeft.seconds, animationDuration, (value) => {
      setAnimatedTime(prev => ({ ...prev, seconds: value }));
    });
  }, [timeLeft]);

  return (
    <section className="hero">
      <div className="semicirculos">
        <img src={semicirculos} alt="Semicírculos decorativos" />
      </div>
      <div className="circulo">
        <img src={circulo} alt="Círculo decorativo" />
      </div>
      <div className="elipse">
        <img src={elipse} alt="Elipse decorativa" />
      </div>
      <div className="content">
        <h1 className="h1">Tu uni es más de lo que crees...</h1>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number animated-number">{animatedTime.days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number animated-number">{animatedTime.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number animated-number">{animatedTime.minutes}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number animated-number">{animatedTime.seconds}</span>
            <span className="countdown-label">Segundos</span>
          </div>
        </div>
        <div className="email-container">
          <input type="email" placeholder="¡Apúntate!" className="email-input" />
          <button className="email-button">
            <span>→</span>
          </button>
        </div>
        <p>4 años, 1.461 días, 35.064 horas, 2.103.840 minutos y 126.230.400 segundos</p>
        <br />
        <p>Demasiado tiempo dura tu etapa universitaria como para dedicarla solo a las clases y a los exámenes.</p>
        <br />
        <p className="cta">Es hora de cambiar eso</p>
      </div>
    </section>
  );
};

export default Hero;