import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
    const { store, actions } = useContext(Context);
    const [planetDetails, setPlanetDetails] = useState({});
    const { planet_id } = useParams();
    const isFavorite = store.favoriteItems.some(item => item.id === planet_id);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${planet_id}`)
            .then(response => response.json())
            .then(data => setPlanetDetails(data.result.properties))
            .catch(error => console.error('Error fetching planet details:', error));
    }, [planet_id]);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFavorite(planet_id);
        } else {
            actions.addFavorite({ id: planet_id, name: planetDetails.name });
        }
    };

    return (
        <div className="container mt-4">
            {/* Parte superior con imagen y descripción */}
            <div className="row mb-4">
                {/* Imagen del planeta */}
                <div className="col-md-4 d-flex justify-content-center">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Planet" 
                        className="img-fluid rounded" 
                    /> {/* Reemplaza con una imagen representativa */}
                </div>
                {/* Título y descripción del planeta */}
                <div className="col-md-8">
                    <h3>{planetDetails.name}</h3>
                    <p>
                        {planetDetails.description || 'No description available'}
                    </p>
                </div>
            </div>

            <hr className="my-4" style={{ borderColor: 'red', borderWidth: '2px' }} />

            {/* Detalles del planeta */}
            <div className="row mb-4">
                <div className="col">
                    <div className="d-flex justify-content-around flex-wrap">
                        <div className="d-flex flex-column text-center">
                            <p><strong>Name:</strong></p>
                            <p>{planetDetails.name}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Climate:</strong></p>
                            <p>{planetDetails.climate}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Terrain:</strong></p>
                            <p>{planetDetails.terrain}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Population:</strong></p>
                            <p>{planetDetails.population}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Orbital Period:</strong></p>
                            <p>{planetDetails.orbital_period}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Rotation Period:</strong></p>
                            <p>{planetDetails.rotation_period}</p>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <p><strong>Diameter:</strong></p>
                            <p>{planetDetails.diameter}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón para agregar/eliminar de favoritos y botón de volver */}
            <div className="d-flex justify-content-between align-items-center">
                <Link to="/" className="btn btn-primary shadow">Back home</Link>
                <button 
                    onClick={handleFavoriteToggle} 
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} shadow`}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

Planet.propTypes = {
    match: PropTypes.object
};
