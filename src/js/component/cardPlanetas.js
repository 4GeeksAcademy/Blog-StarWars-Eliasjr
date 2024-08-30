import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import PropTypes from 'prop-types';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export const CardPlanet = ({ uid, name, population, climate, terrain }) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favoriteItems.some(item => item.id === uid);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFavorite(uid);
        } else {
            actions.addFavorite({ id: uid, name });
        }
    };

    return (
        <Card 
            className="shadow m-2" 
            style={{ 
                width: '100%', 
                maxWidth: '22rem', 
                height: 'auto' 
            }}
        >
            <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150" 
                className="img-fluid" 
                style={{ 
                    objectFit: 'cover', 
                    height: '400px'
                }} 
            />
            <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text className="text-center">
                    <div className="d-flex flex-column">
                        <span><strong>Population:</strong> {population}</span>
                        <span><strong>Climate:</strong> {climate}</span>
                        <span><strong>Terrain:</strong> {terrain}</span>
                    </div>
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link 
                        to={`/planets/${uid}`} 
                        className='btn btn-primary shadow flex-grow-1 mx-1 text-nowrap'
                    >
                        Ver {name}
                    </Link>
                    <button 
                        onClick={handleFavoriteToggle} 
                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} shadow flex-grow-1 mx-1`}
                    >
                        {isFavorite ? <FaHeart /> : <FaHeartBroken />}
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};

CardPlanet.propTypes = {
    uid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
};
