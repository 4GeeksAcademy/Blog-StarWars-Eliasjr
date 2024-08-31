import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { HeartIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'; // Importar íconos de Heroicons v2

export const Personajes = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.personajes(); // Llama a la acción que obtiene los personajes
    }, []);

    const toggleFavorite = (personaje) => {
        actions.toggleFavorite(personaje);
    };

    return (
        <Container fluid>
            <div className="tarjetas-scroll">
                {store.personajes.map(personaje => (
                    <Card className="h-100 me-3" key={personaje.uid} style={{ minWidth: "250px", position: "relative" }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
                        <Card.Body>
                            <Card.Title>{personaje.name}</Card.Title>
                            <Card.Text>
                                {personaje.description || "Descripción no disponible."}
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={`/personaje/${personaje.uid}`}>
                                    <Button className="btn btn-primary">Read more!</Button>
                                </Link>
                                <button 
                                    className="like-button"
                                    onClick={() => toggleFavorite(personaje)}
                                >
                                    {store.favorites.some(fav => fav.uid === personaje.uid) ? (
                                        <HeartIcon className="like-icon text-red-500" />
                                    ) : (
                                        <HeartOutlineIcon className="like-icon text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
