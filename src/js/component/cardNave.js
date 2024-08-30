import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export const CardNave = (props) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favoriteItems.some(item => item.id === props.uid);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFavorite(props.uid);
        } else {
            actions.addFavorite({ id: props.uid, name: props.name });
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
                <Card.Title className="text-center">{props.name}</Card.Title>
                <Card.Text className="text-center">Info.</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link 
                        to={`/nave/${props.uid}`} 
                        className='btn btn-primary shadow flex-grow-1 mx-1 text-nowrap'
                    >
                        Ver {props.name}
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
