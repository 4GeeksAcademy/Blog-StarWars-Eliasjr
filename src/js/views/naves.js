import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import '../../styles/naves.css'; // Asegúrate de que tienes este archivo CSS

export const Naves = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.naves(); // Llama a la acción que obtiene las naves
    }, [actions]);

    return (
        <Container fluid>
            <div className="tarjetas-scroll">
                {store.naves.map(nave => (
                    <Card className="h-100 me-3" key={nave.uid} style={{ minWidth: "250px" }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
                        <Card.Body>
                            <Card.Title>{nave.name}</Card.Title>
                            {/* Mostrar detalles adicionales debajo del nombre */}
                            <Card.Text>
                                <strong>Modelo:</strong> {nave.model || "N/A"}<br />
                                <strong>Clase:</strong> {nave.starship_class || "N/A"}<br />
                                <strong>Tripulación:</strong> {nave.crew || "N/A"}
                            </Card.Text>
                            {/* El enlace incluye el ID dinámico de la nave */}
                            <Link to={`/nave/${nave.uid}`}>
                                <Button className="btn btn-primary w-100">Read more!</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
