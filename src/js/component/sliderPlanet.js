import React, { useRef } from 'react';
import Slider from 'react-slick';
import { CardPlanet } from "./cardPlanetas";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Iconos para las flechas

const SliderPlanetas = ({ planetas }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
                    {planetas.map((planeta, index) => (
                        <div key={index}>
                            <CardPlanet 
                                name={planeta.name}
                                uid={planeta.uid}
                                population={planeta.population}
                                terrain={planeta.tarrain}/>
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

export default SliderPlanetas;
