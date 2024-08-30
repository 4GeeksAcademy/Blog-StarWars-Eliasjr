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
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false // Desactiva las flechas predeterminadas
    };

    return (
        <div className="slider-container">
            {/* Botón para retroceder */}
            <button 
                className="slick-prev" 
                onClick={() => sliderRef.current.slickPrev()}
            >
                <FaChevronLeft size={40} />
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
                <FaChevronRight size={40} />
            </button>
        </div>
    );
};

export default SliderNaves;
