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
        <section className="stats">
            {stats.map((item) => (
                <StatItem key={item.text} {...item} />
            ))}
        </section>
    );
};

export default Stats;