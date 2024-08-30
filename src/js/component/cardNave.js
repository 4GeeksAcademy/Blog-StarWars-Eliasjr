import React, { useContext } from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
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
        <Card className="shadow m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rigoImage} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>Info.</Card.Text>
                <Link to={`/nave/${props.uid}`} className='btn btn-primary shadow'>Ver {props.name}</Link>
                <button 
                    onClick={handleFavoriteToggle} 
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} shadow ml-2`}
                >
                    {isFavorite ? <FaHeart /> : <FaHeartBroken />}
                </button>
            </Card.Body>
        </Card>
    );
};
