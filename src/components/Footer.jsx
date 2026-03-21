import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import smLogoF from "../assets/image/footer/smFooter.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-shell">
        <div className="row footer-main gy-4 gx-lg-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/" className="footer-brand">
              <img src={smLogoF} alt="SM 2162" />
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h2 className="footer-col-title">Sobre Nosotros</h2>
            <ul className="footer-links">
              <li>
                <Link to="/quienesSomos">Nuestro Trabajo</Link>
              </li>
              <li>
                <Link to="/contacto">Ubicación</Link>
              </li>
              <li>
                <Link to="/quienesSomos">La Empresa</Link>
              </li>
              <li>
                <Link to="/quienesSomos">El Equipo</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h2 className="footer-col-title">Servicio</h2>
            <ul className="footer-links">
              <li>
                <Link to="/vehiculos">Compra</Link>
              </li>
              <li>
                <a href="#">Venta</a>
              </li>
              <li>
                <a href="#">Financiamiento</a>
              </li>
              <li>
                <a href="#">Mantenimiento</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h2 className="footer-col-title">Redes Sociales</h2>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            ©Bruno Bianchi - San Martin 2162 - San Miguel De Tucumán
          </p>
          <div className="footer-legal">
            <a href="#">Privacidad y Política</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
