import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo1.png";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FaTrash } from 'react-icons/fa';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-4 shadow-lg">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src={Logo} alt="Logo" style={{ width: "150px" }} className="shadow-lg" />
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex ml-auto align-items-center w-100 justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle 
                                variant="primary" 
                                id="dropdown-basic" 
                                style={{ height: "60px" }} 
                                className="shadow-lg"
                            >
                                Favorito ({store.favoriteItems.length})
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow-lg">
                                {store.favoriteItems.length > 0 ? (
                                    store.favoriteItems.map((item, index) => (
                                        <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                                            <Link to={`/details/${item.id}`} className="text-decoration-none">{item.name}</Link>
                                            <button 
                                                className="btn btn-outline-danger btn-sm" 
                                                onClick={() => actions.removeFavorite(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <Dropdown.Item>No favorites yet</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};
