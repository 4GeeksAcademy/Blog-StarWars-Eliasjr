import React, { useRef } from 'react';
import Slider from 'react-slick';
import { CardPlanet } from "./cardPlanetas";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Iconos para las flechas

const SliderPlanetas = ({ planetas }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
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
            <button 
                className="slick-prev" 
                onClick={() => sliderRef.current.slickPrev()}
            >
                <FaChevronLeft size={30} />
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
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default SliderPlanetas;
