import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import SliderNaves from "../component/sliderNaves";
import SliderPlanetas from "../component/sliderPlanet";
import SliderPeople from "../component/sliderPeople";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.Starships();
        actions.Planets();
        actions.People();
    }, [actions]);

    return (
        <div className="container text-center mt-5">
            {/* Título para el carrusel de personajes */}
            <h1 className="text-start text-danger mb-4">
                <strong>Characters</strong>
            </h1>
            {/* Carrusel de personajes */}
            <SliderPeople people={store.peopleFlux} />

            {/* Título para el carrusel de planetas */}
            <h1 className="text-start text-danger mt-5 mb-4">
                <strong>Planets</strong>
            </h1>
            {/* Carrusel de planetas */}
            <SliderPlanetas planetas={store.planetFlux} />

            {/* Título para el carrusel de naves */}
            <h1 className="text-start text-danger mt-5 mb-4">
                <strong>Starships</strong>
            </h1>
            {/* Carrusel de naves */}
            <SliderNaves naves={store.navesFlux} />
        </div>
    );
};
