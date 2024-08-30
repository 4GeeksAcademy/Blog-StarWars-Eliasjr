import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const CardPlanet = (props) => {
    const { name, uid, population, terrain } = props;

    return (
        <Card className="shadow m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rigoImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Population:</strong> {population} <br />
                    <strong>Terrain:</strong> {terrain}
                </Card.Text>
                <Link to={`/planet/${uid}`} className='btn btn-primary shadow'>Ver {name}</Link>
            </Card.Body>
        </Card>
    );
};
