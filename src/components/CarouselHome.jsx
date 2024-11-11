import React from "react";
import "../css/carouselHome.css";
import Carousel from "react-bootstrap/Carousel";
import renaultBigster from "../assets/image/carousel/renaultBigster.png";
import vvGolf from "../assets/image/carousel/vwGolf.png";
import toyotaHilux from "../assets/image/carousel/toyotaHilux.png";
import fordRanger from "../assets/image/carousel/fordRanger.png";

const CarouselHome = () => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        pause={false}
        // controls={false}
        // indicators={false}
        // interval={null}
        // pause={"hover"}
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={renaultBigster}
            alt="renault bigster"
          />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">RENAULT BIGSTER</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="boton-item-carousel">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={vvGolf} alt="volkswagen golf" />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">VOLKSWAGEN GOLF</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="boton-item-carousel">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={toyotaHilux} alt="toyota hilux" />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">TOYOTA HILUX</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="boton-item-carousel">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={fordRanger} alt="ford ranger" />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">FORD RANGER</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="boton-item-carousel">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
