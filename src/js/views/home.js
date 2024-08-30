import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardPlanet } from "../component/cardPlanetas";
import { CardPeople } from "../component/cardPeople";
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
        <div className="container justify-content-center text-center mt-5">
            <h1 className="d-flex justify-content-start text-danger">Characters</h1>
            <SliderPeople people={store.peopleFlux} />

			<h1 className="d-flex justify-content-start text-danger">Planets</h1>
			<SliderPlanetas planetas={store.planetFlux} />

            <h1 className="d-flex justify-content-start text-danger">Starships</h1>
            <SliderNaves naves={store.navesFlux} />
        </div>
    );
};




