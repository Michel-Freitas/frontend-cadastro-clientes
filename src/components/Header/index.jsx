import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Controle de Clientes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item as={Link} to="/" className="nav-link">Home</Nav.Item>
                    <Nav.Item as={Link} to="/clientes" className="nav-link">Clientes</Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header