import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaChevronCircleDown, FaChevronCircleLeft } from 'react-icons/fa';
import { Context } from "../store/appContext";
import '../../styles/navbar.css'; // Asegúrate de tener este archivo CSS para las transiciones

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { isDropdownOpen } = store;

    return (
        <nav className="navbar navbar-light bg-light mb-3 shadow">
            <Container>
                <Row className="w-100">
                    <Col className="d-flex align-items-center">
                        {/* Imagen de la marca o título */}
                        <Link to="/">
                            <img
                                src="https://fontmeme.com/permalink/240831/bb0f050b78c738767e48fad9b58736ef.png"
                                alt="redimensionar-imagenes"
                                className="navbar-brand"
                                style={{ maxWidth: "700px", height: "auto", backgroundAttachment: "cover" }}
                            />
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        {/* Menú desplegable Favorito */}
                        <Dropdown show={isDropdownOpen} onClick={() => actions.toggleDropdown()}>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={
                                    <span>
                                        Favorites
                                        {isDropdownOpen ? (
                                            <FaChevronCircleDown className="ms-2" />
                                        ) : (
                                            <FaChevronCircleLeft className="ms-2" />
                                        )}
                                    </span>
                                }
                                className="dropdown-button"
                            >
                                <Dropdown.Item href="#action/1">Item 1</Dropdown.Item>
                                <Dropdown.Item href="#action/2">Item 2</Dropdown.Item>
                                <Dropdown.Item href="#action/3">Item 3</Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};
