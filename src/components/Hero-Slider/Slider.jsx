import React, { useState, useEffect } from 'react';
import savepig from '../../assets/Slider/savepig.jpg';
import innovation from '../../assets/Slider/innovation2.jpg';
import respect from '../../assets/Slider/respect.jpg';

const slides = [
    {
        image: savepig,
        caption: "Promover el ahorro de los recursos ecológicos",
        color: "text-gray-50"
    },
    {
        image: innovation,
        caption: "Nuevos horizontes energéticos",
        color: "text-red-500"
    },
    {
        image: respect,
        caption: "Respeto por el medio ambiente",
        color: "text-blue-500"
    },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '90vh',
            overflow: 'hidden',
        }}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transition: 'opacity 0.7s ease-in-out',
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '1rem',
                        background: 'rgba(0, 0, 0, 0.4)', // Fondo semitransparente para mejorar el contraste
                    }}>
                        <h1 style={{
                            textTransform: 'uppercase',
                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', // Tamaño responsivo
                            fontWeight: 'bold',
                            color: slide.color,
                            textAlign: 'center',
                            width: '80%',
                        }}>
                            {slide.caption}
                        </h1>
                    </div>
                </div>
            ))}
            <button onClick={handlePrev} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '1.5rem', // Botones más grandes en pantallas pequeñas
            }}>
                ◀
            </button>
            <button onClick={handleNext} style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '1.5rem',
            }}>
                ▶
            </button>
        </div>
    );
}
