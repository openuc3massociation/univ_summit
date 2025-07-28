import React, { FC, useState, useCallback, useMemo} from "react";
import "../index.css";
import "../styles/components/Founders.css"
import Ausina from "../assets/founders/Ausina.jpg";
import Alberto from "../assets/founders/Alberto.jpg";
import Sergio from "../assets/founders/Sergio.jpg";
import Ioana from "../assets/founders/Ioana.jpg";
import Mario from "../assets/founders/Mario.jpg";
import Rubén from "../assets/founders/Rubén.jpg";
import Enrique from "../assets/founders/Enrique.jpg";

const TRANSITION_DURATION = 800;
const VISIBLE_CARDS = 5;

const Founders: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    //const [exitingCards, setExitingCards] = useState<{[key: number]: string}>({});
    //const transitionTimeoutRef = useRef<number | null>(null);

    const founders = useMemo(() => [
        { id: 1, name: "Alejandro Ausina", image: Ausina },
        { id: 2, name: "Ioana Nedelcu", image: Ioana },
        { id: 3, name: "Mario Castro", image: Mario },
        { id: 4, name: "Sergio Palacio", image: Sergio },
        { id: 5, name: "Enrique Casado", image: Enrique },
        { id: 6, name: "Rubén Estebala", image: Rubén },
        { id: 7, name: "Alberto Minaya", image: Alberto },
    ], []);

    const handleTransition = useCallback((direction: 'left' | 'right', indexChange: number) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setSlideDirection(direction);
        setCurrentIndex((prev) => (prev + indexChange + founders.length) % founders.length);
        
        setTimeout(() => {
            setIsTransitioning(false);
            setSlideDirection(null);
        }, TRANSITION_DURATION + 400);
    }, [isTransitioning, founders.length]);

    const nextSlide = useCallback(() => handleTransition('right', 1), [handleTransition]);
    const prevSlide = useCallback(() => handleTransition('left', -1), [handleTransition]);

    const visibleFounders = useMemo(() => {
        const visible = [];
        const halfCards = Math.floor(VISIBLE_CARDS / 2);
        
        for (let i = -halfCards; i <= halfCards; i++) {
            const index = (currentIndex + i + founders.length) % founders.length;

            const shouldSlideIn = 
                (slideDirection === 'right' && i === halfCards) ||
                (slideDirection === 'left' && i === -halfCards);
            
            const shouldSlideOut =
                (slideDirection === 'right' && i === -halfCards) ||
                (slideDirection === 'left' && i === halfCards);
            
            visible.push({
                ...founders[index],
                position: i,
                isCenter: i === 0,
                shouldSlideIn,
                shouldSlideOut,
                slideDirection
            });
        }
        return visible;
    }, [currentIndex, slideDirection, founders]);

    const handleCardClick = useCallback((position: number) => {
        if (isTransitioning) return;
        if (position < 0) prevSlide();
        else if (position > 0) nextSlide();
    }, [isTransitioning, prevSlide, nextSlide]);

    return (
        <section className="founders">
            <h2>NUESTROS FUNDADORES</h2>
            <div className="founders-carousel">
                <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                    &#8249;
                </button>
                <div className="founders-container">
                    {visibleFounders.map((founder, index) => {
                        let slideClass = '';

                        if (founder.shouldSlideIn) {
                            slideClass = founder.slideDirection === 'right' ? 'slide-in-right' : 'slide-in-left';
                        }

                        if (founder.shouldSlideOut) {
                            slideClass = founder.slideDirection === 'right' ? 'slide-out-left' : 'slide-out-right';
                        }
                        return (
                            <div
                                key={founder.id}
                                className={`founder-card position-${index} ${founder.isCenter ? 'center' : ''} ${isTransitioning ? 'transitioning' : ''} ${slideClass}`}
                                onClick={() => handleCardClick(founder.position)}
                            >
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="founder-img"
                                />
                                <div className="founder-info">
                                    <h3>{founder.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};

export default Founders;