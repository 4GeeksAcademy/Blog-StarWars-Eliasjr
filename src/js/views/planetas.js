import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import "../../styles/planetas.css"

export const Planetas = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.planetas(); // Llama a la acción que obtiene los planetas
    }, []);

    return (
        <Container fluid>
            <div className="tarjetas-scroll">
                {store.planetas.map(planeta => (
                    <Card className="h-100 me-3" key={planeta.uid} style={{ minWidth: "250px" }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
                        <Card.Body>
                            <Card.Title>{planeta.name}</Card.Title>
                            {/* El enlace incluye el ID dinámico del planeta */}
                            <Link to={`/planeta/${planeta.uid}`}>
                                <Button className="btn btn-primary w-100">Read more!</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
