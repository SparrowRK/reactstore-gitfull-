import './_slider.scss'

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ slides }) => {
    // Создаем расширенный массив: последний слайд + все слайды + первый слайд
    const extendedSlides = [...slides.slice(-1), ...slides, ...slides.slice(0, 1)];
    // Начинаем с индекса 1 (первый оригинальный слайд)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timerRef = useRef(null);
    const resetInProgress = useRef(false);

    const resetToRealPosition = useCallback(() => {

        if (currentIndex >= slides.length + 1) {
            resetInProgress.current = true;
            setIsTransitioning(false);
            setCurrentIndex(1);

            setTimeout(() => {
                setIsTransitioning(true);
                resetInProgress.current = false;
            }, 50);
        }

        else if (currentIndex <= 0) {
            resetInProgress.current = true;
            setIsTransitioning(false);
            setCurrentIndex(slides.length);

            setTimeout(() => {
                setIsTransitioning(true);
                resetInProgress.current = false;
            }, 50);
        }
    }, [currentIndex, slides.length]);

    const handleTransitionEnd = useCallback(() => {
        if (!resetInProgress.current) {
            resetToRealPosition();
        }
    }, [resetToRealPosition]);

    const startSliderTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        if (!isHovered) {
            timerRef.current = setInterval(() => {
                if (!resetInProgress.current) {
                    setCurrentIndex(prev => prev + 1);
                }
            }, 4500);
        }
    }, [isHovered]);

    const slideleft = useCallback(() => {
        if (!resetInProgress.current) {
            setCurrentIndex(prev => prev - 1);
        }
        startSliderTimer();
    }, [startSliderTimer]);

    const slideright = useCallback(() => {
        if (!resetInProgress.current) {
            setCurrentIndex(prev => prev + 1);
        }
        startSliderTimer();
    }, [startSliderTimer]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        startSliderTimer();
    }, [startSliderTimer]);

    useEffect(() => {
        startSliderTimer();

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [startSliderTimer]);

    return (
        <section className="slider">
            <button className="arrowprev" onClick={slideleft}>
                <img src="img/icons/arrowleft.svg" alt="arrow" />
            </button>

            <div
                className="slider__wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedSlides.map((item, index) => (
                    <Link
                        to={`/Store/promos/promo/${item.id}`}
                        key={`${item.id}-${index}`}
                        data-slide={item.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={item.src} alt={item.alt} />
                    </Link>
                ))}
            </div>

            <button className="arrownext" onClick={slideright}>
                <img src="img/icons/arrowright.svg" alt="arrow" />
            </button>
        </section>
    );
};

export default Slider;