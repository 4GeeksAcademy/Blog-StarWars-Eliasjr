import React, { useRef } from 'react';
import Slider from 'react-slick';
import { CardPeople } from "../component/cardPeople";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Iconos para las flechas

const SliderPeople = ({ people }) => {
    const sliderRef = useRef(null);

    // Configuración del slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3, // Muestra 3 elementos a la vez por defecto
        slidesToScroll: 1, // Desplaza 2 elemento a la vez
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, // Desactiva las flechas predeterminadas
        responsive: [
            {
                breakpoint: 1024, // Pantallas más grandes (tabletas)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Pantallas medianas (móviles en apaisado)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Pantallas más pequeñas (móviles en vertical)
                settings: {
                    slidesToShow: 1, // Muestra 1 elemento a la vez en pantallas pequeñas
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <button 
                className="slick-prev" 
                onClick={() => sliderRef.current.slickPrev()}
            >
                <FaChevronLeft size={60} />
            </button>
            <div className="slider-wrapper">
                <Slider {...settings} ref={sliderRef}>
                    {people.map((person, index) => (
                        <div key={index}>
                            <CardPeople 
                                name={person.name} 
                                uid={person.uid}
                                gender={person.gender}
                                hair_color={person.hair_color}
                                eye_color={person.eye_color}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <button 
                className="slick-next" 
                onClick={() => sliderRef.current.slickNext()}
            >
                <FaChevronRight size={60} />
            </button>
        </div>
    );
};

export default SliderPeople;
