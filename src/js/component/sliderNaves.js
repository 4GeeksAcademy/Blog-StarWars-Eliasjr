import React, { useRef } from 'react';
import Slider from 'react-slick';
import { CardNave } from "../component/cardNave";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Iconos para las flechas

const SliderNaves = ({ naves }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false, // Desactiva los puntos de navegación
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
            {/* Botón para retroceder */}
            <button 
                className="slick-prev" 
                onClick={() => sliderRef.current.slickPrev()}
            >
                <FaChevronLeft size={60} />
            </button>
            {/* Contenedor del slider */}
            <div className="slider-wrapper">
                <Slider {...settings} ref={sliderRef}>
                    {naves.map((nave, index) => (
                        <div key={index}>
                            <CardNave 
                                name={nave.name} 
                                uid={nave.uid} // Asegúrate de que `uid` existe en `nave` o ajusta el nombre según tu modelo de datos
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Botón para avanzar */}
            <button 
                className="slick-next" 
                onClick={() => sliderRef.current.slickNext()}
            >
                <FaChevronRight size={60} />
            </button>
        </div>
    );
};

export default SliderNaves;
