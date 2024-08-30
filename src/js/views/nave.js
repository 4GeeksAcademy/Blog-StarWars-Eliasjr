import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = () => {
    const { store, actions } = useContext(Context);
    const [naveDetails, setNaveDetails] = useState({});
    const params = useParams();
    const isFavorite = store.favoriteItems.some(item => item.id === params.nave_id);

    useEffect(() => {
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
            .then(response => response.json())
            .then(data => setNaveDetails(data.result.properties))
            .catch(error => console.error('Error fetching starship details:', error));
    }, [params.nave_id]);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFavorite(params.nave_id);
        } else {
            actions.addFavorite({ id: params.nave_id, name: naveDetails.name });
        }
    };

    return (
        <div className="container mt-4">
            {/* Parte superior con imagen y descripción */}
            <div className="row mb-4">
                {/* Imagen de la nave */}
                <div className="col-md-4 d-flex justify-content-center">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Starship" 
                        className="img-fluid rounded" 
                    /> {/* Reemplaza con una imagen representativa */}
                </div>
                {/* Título y descripción de la nave */}
                <div className="col-md-8">
                    <h3>{naveDetails.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur ligula nec orci elementum, sed dignissim dolor malesuada. Sed eget mauris auctor, scelerisque orci in, scelerisque nunc. Integer vulputate arcu at lectus fermentum, a ullamcorper ante eleifend. Fusce vel urna sit amet tortor volutpat aliquet. Morbi sagittis, lorem id iaculis feugiat, neque mi commodo eros, in sodales justo dui non eros. Aenean vitae diam et libero sollicitudin gravida. Cras sed sapien non justo fermentum gravida. Donec auctor tortor sit amet erat interdum, eu lacinia nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ut diam nec nunc scelerisque cursus. Nulla facilisi.</p>
                </div>
            </div>

            {/* Línea horizontal */}
            <hr className="my-4" style={{ borderColor: 'red', borderWidth: '2px' }} />

            {/* Detalles debajo del HR */}
            <div className="row mb-4">
                <div className="col">
                    <div className="d-flex justify-content-around flex-wrap">
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Starship class:</strong></p>
                            <p>{naveDetails.starship_class}</p>
                        </div>
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Model:</strong></p>
                            <p>{naveDetails.model}</p>
                        </div>
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Manufacturer:</strong></p>
                            <p>{naveDetails.manufacturer}</p>
                        </div>
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Passengers:</strong></p>
                            <p>{naveDetails.passengers}</p>
                        </div>
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Max atmosphering speed:</strong></p>
                            <p>{naveDetails.max_atmosphering_speed}</p>
                        </div>
                        <div className="d-flex flex-column text-center mx-3">
                            <p><strong>Cost in credits:</strong></p>
                            <p>{naveDetails.cost_in_credits}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
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

Nave.propTypes = {
    match: PropTypes.object,
};
