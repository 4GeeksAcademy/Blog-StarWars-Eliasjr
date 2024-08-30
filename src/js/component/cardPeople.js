import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardPeople = ({ uid, name, gender, hair_color, eye_color }) => {
    return (
        <Card className="shadow m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rigoImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div className="d-flex flex-column">
                        <span><strong>Gender:</strong> {gender}</span>
                        <span><strong>Hair Color:</strong> {hair_color}</span>
                        <span><strong>Eye Color:</strong> {eye_color}</span>
                    </div>
                </Card.Text>
                <Link to={`/people/${uid}`} className='btn btn-primary shadow'>Ver {name}</Link>
            </Card.Body>
        </Card>
    );
};

CardPeople.propTypes = {
    name: PropTypes.string.isRequired,

};
