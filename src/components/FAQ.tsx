import React, {FC, use, useState} from "react";

interface FAQItemProps { 
    question: string;
    answer: string;    
}

const faqData: FAQItemProps[] = [
    { question: '¿Qué días es?', answer: 'El evento será del 10 al 12 de Marzo.'},
    { question: '¿Necesito experiencia previa?', answer: 'No es necesaria experiencia previa, solo tus ganas.'},
];

const FAQ: FC = () => (
    <section className="faq">
        {faqData.map((item, idx) => (
            <FAQItem key={idx} {...item} />
        ))}
    </section>
);

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-item">
            <button onClick={() => setOpen(!open)} className="faq-question">
                {question} <span className="faq-icon">{open ? '-' : '+'}</span>
            </button>
            {open && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

export default FAQ;