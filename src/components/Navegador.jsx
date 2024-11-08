import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navegador.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navegador = () => {
  return (
    <div>
      <Navbar expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="logo-sm">
            SM2162
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto container-items">
              <Nav.Link as={NavLink} to="/" className="nav-items">
                INICIO
              </Nav.Link>
              <Nav.Link as={NavLink} to="/vehiculos" className="nav-items">
                VEHÍCULOS
              </Nav.Link>
              <Nav.Link as={NavLink} to="/quienesSomos" className="nav-items">
                QUIENES SOMOS
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacto" className="nav-items">
                CONTACTO
              </Nav.Link>
            </Nav>

            <div className="navbar-iconos">
              <i
                className="fa fa-heart items-iconos icono-heart"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-search items-iconos icono-search"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-power-off items-iconos icono-sesion"
                aria-hidden="true"
              ></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegador;
