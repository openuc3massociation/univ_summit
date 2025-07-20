import React, {FC, useEffect, useState} from "react";
import "../index.css";

interface StatItemProps {
    label: string;
    text: string;
}

const StatItem: FC<StatItemProps> = ({label, text}) => {
    const target = parseInt(label.replace('+', ''), 10);
    const [count, setCount] = useState(0);

    useEffect (() => {
        let start = 0;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / target), 1);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="stat-item">
            <h3>+{count}</h3>
            <p>{text}</p>
        </div>
    );
};

const Stats: FC = () => {
    const stats = [
        { label: '+50', text: 'EMPRESAS' },
        { label: '+100', text: '  STARTUPS' },
        { label: '+600', text: 'PARTICIPANTES' },
    ];

    return (
        <>
            <section className="stats">
                {stats.map((item) => (
                    <StatItem key={item.text} {...item} />
                ))}
            </section>
            <section className="bubbles">
                <div className="bubble">
                    <img src="" alt="Empresas" className="bubble-img" />
                    <img src="" alt="Startups" className="bubble-img" />
                    <img src="" alt="Participantes" className="bubble-img" />
                </div>
            </section>
            <section className="mission-values">
                <div className="mission-section">
                    <h2>NUESTRA MISIÓN</h2>
                    <p>No vamos a descansar hasta que consigamos que puedas poner al servicio de tu desarrollo profesional todo tu potencial.</p>
                    <p>De la mano de referentes en el sector, este evento va a ser el exponente que necesita tu esfuerzo para multiplicarse y descubrirte un nuevo horizonte.</p>
                </div>
                <div className="values-section">
                    <h2>NUESTROS VALORES</h2>
                    <p>Innovarte</p>
                </div>
            </section>
        </>
    );
};

export default Stats;