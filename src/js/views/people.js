import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export const People = () => {
    const { store, actions } = useContext(Context);
    const [peopleDetails, setPeopleDetails] = useState({});
    const params = useParams();  // Obtén el ID del personaje desde los parámetros de la URL
    const isFavorite = store.favoriteItems.some(item => item.id === params.people_id);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${params.people_id}/`)
            .then(response => response.json())
            .then(data => setPeopleDetails(data))
            .catch(error => console.error('Error fetching people details:', error));
    }, [params.people_id]);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFavorite(params.people_id);
        } else {
            actions.addFavorite({ id: params.people_id, name: peopleDetails.name });
        }
    };

    return (
        <div className="container mt-4">
            {/* Parte superior con imagen y descripción */}
            <div className="row mb-4">
                {/* Imagen del personaje */}
                <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Character" 
                        className="img-fluid rounded" 
                        style={{ maxWidth: '100%', height: 'auto' }} 
                    />
                </div>
                {/* Título y descripción del personaje */}
                <div className="col-12 col-md-8">
                    <h3 className="mb-3">{peopleDetails.name}</h3>
                    <p>{peopleDetails.description || 'No description available'}</p>
                </div>
            </div>

            <hr className="my-4" style={{ borderColor: "red", borderWidth: "2px" }} />

            {/* Detalles del personaje */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Gender:</strong></p>
                            <p>{peopleDetails.gender}</p>
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Hair Color:</strong></p>
                            <p>{peopleDetails.hair_color}</p>
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Eye Color:</strong></p>
                            <p>{peopleDetails.eye_color}</p>
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Birth Year:</strong></p>
                            <p>{peopleDetails.birth_year}</p>
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Height:</strong></p>
                            <p>{peopleDetails.height}</p>
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <p><strong>Skin Color:</strong></p>
                            <p>{peopleDetails.skin_color}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón para agregar/eliminar de favoritos y botón de volver */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <Link to="/" className="btn btn-primary mb-3 mb-md-0 shadow">Back home</Link>
                <button 
                    onClick={handleFavoriteToggle} 
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} shadow`}
                >
                    {isFavorite ? <FaHeart /> : <FaHeartBroken />}
                </button>
            </div>
        </div>
    );
};

People.propTypes = {
    match: PropTypes.object,
};
