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
        speed: 500,
        slidesToShow: 3, // Muestra 3 elementos a la vez por defecto
        slidesToScroll: 3, // Desplaza 3 elementos a la vez
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Desactiva las flechas predeterminadas
        responsive: [
            {
                breakpoint: 1024, // Pantallas más grandes (tabletas)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // Pantallas medianas (móviles en apaisado)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // Pantallas más pequeñas (móviles en vertical)
                settings: {
                    slidesToShow: 1,
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
                <FaChevronLeft size={30} />
            </button>
            <div className="slider-wrapper">
                <Slider {...settings} ref={sliderRef}>
                    {people.map((person, index) => (
                        <div key={index}>
                            <CardPeople 
                                name={person.name} 
                                uid={person.uid} // Asegúrate de que `url` existe en `person` o ajusta el nombre según tu modelo de datos
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <button 
                className="slick-next" 
                onClick={() => sliderRef.current.slickNext()}
            >
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default SliderPeople;
