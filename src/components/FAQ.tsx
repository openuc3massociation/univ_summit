import React, {FC, useState} from "react";
import "../index.css";

type FAQItem = {
    question: string;
    answer: string;
    color: "blue" | "yellow";
};

const faqData: FAQItem[] = [
    {
        question: "¿Qué días se celebrará el evento?",
        answer: "El evento se celebrará los días 15 y 16 de Marzo",
        color: "blue",
    },
    {
        question: "¿Dónde se llevará a cabo el evento?",
        answer: "El evento tendrá lugar en la Universidad Carlos III de Madrid.",
        color: "yellow",
    },
    {
        question: "¿Cómo puedo registrarme?",
        answer: "Puedes registrarte a través de nuestra página web. ¡No te lo pierdas!",
        color: "blue",
    },
    {
        question: "¿Habrá ponentes?",
        answer: "Sí, contaremos con la presencia de destacados ponentes que han pasado por la UC3M.",
        color: "yellow",
    },
];

const FAQ: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="about-lines">
              <div className="line line-1"></div> 
            </div>
            <div className="about-lines-2">
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            <h2 className="faq-title">FAQ</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${item.color}`}>
                        <div className="faq-question" onClick={() => toggle(index)}>
                            <span>{item.question}</span>
                            <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
                                &#x25BC;
                            </span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="about-lines-bottom">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        </section>
    );
};

export default FAQ;