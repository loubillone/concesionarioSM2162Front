import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navegador.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navegador = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            SM 2162
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
          </Navbar.Collapse>
        </Container>

        <div className="navbar-iconos">
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-search" aria-hidden="true"></i>
          <i class="fa fa-power-off" aria-hidden="true"></i>
        </div>
      </Navbar>
    </div>
  );
};

export default Navegador;
