import React, {FC, useEffect, useState} from "react";
import "../index.css";
import "../styles/components/Stats.css"
import valores_abajo from "../assets/valores-abajo.svg"
import valores_arriba from "../assets/valores-arriba.svg";
import valores_lado from "../assets/valores-lado.svg";
import mision_abajo from "../assets/mision-abajo.svg";
import mision_arriba from "../assets/mision-arriba.svg"
import startup from "../assets/one_pager_startups.png"
import asociaciones from "../assets/one_pager_asociaciones.jpg"
import empresas from "../assets/one_pager_empresas.jpg"

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
                    <a href="/unisummit_dia_empresas_onepager.pdf" download>
                        <img src={empresas} alt="Empresas" className="bubble-img" />
                    </a>
                    <a href="/unisummit_dia_startups_onepager.pdf" download>
                        <img src={startup} alt="Startups" className="bubble-img" />
                    </a>
                    <a href="/unisummit_dia_asociaciones_onepager.pdf" download>
                        <img src={asociaciones} alt="Participantes" className="bubble-img" />
                    </a>
                </div>
            </section>
            <section className="mission-values">
                <div className="mission-section">
                    <div className="mision-arriba">
                        <img src={mision_arriba} alt="Semicírculo misión arriba" />
                    </div>
                    <h2>NUESTRA MISIÓN</h2>
                    <p>Hacer de la universidad un punto de encuentro, de excelencia y en el que los alumnos puedan poner en práctica, de manera profesional, lo aprendido en las clases
                        <br /><br />
                    De la mano de referentes en el sector, este evento va a ser el exponente que necesita tu esfuerzo para multiplicarse y descubrirte un nuevo horizonte.</p>
                    <div className="mision-abajo">
                        <img src={mision_abajo} alt="Semicírculo misión abajo" />
                    </div>
                </div>
                <div className="values-section">
                    <div className="valores-arriba">
                        <img src={valores_arriba} alt="Semicírculo valores abajo" />
                    </div>
                    <div className="valores-lateral">
                        <img src={valores_lado} alt="Semicírculo valores lado" />
                    </div> 
                    <h2>NUESTROS VALORES</h2>
                    <ul>
                        <li>La excelencia incondicional</li>
                        <li>Compromiso con la generación universitaria</li>
                        <li>Visión de futuro</li>
                        <li>Ganas de provocar un cambio</li>
                    </ul>
                    <div className="valores-abajo">
                        <img src={valores_abajo} alt="Semicírculo valores arriba" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stats;