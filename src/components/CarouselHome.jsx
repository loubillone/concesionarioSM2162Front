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
        // controls={false}
        // indicators={false}
        // interval={4000}
        // pause={false}
        controls={false}
        indicators={false}
        interval={null}
        pause={"hover"}
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

            <div className="row fila-flyer-info">
              <div className="col-3">
                <div className="contenedor-flyer-info">
                  <span className="texto-flyer-info-numeros">01</span>
                  <span className="texto-flyer-info-velocidad">
                    Velocidad Máxima
                  </span>
                  <span className="texto-flyer-info-especial">250 km/h</span>
                </div>
              </div>
              <div className="col-3 ">
                <div className="contenedor-flyer-info">
                  <span className="texto-flyer-info-numeros">02</span>
                  <span className="texto-flyer-info-velocidad">
                    Consumo Combustible
                  </span>
                  <span className="texto-flyer-info-especial">6.3 - 5,7.1</span>
                </div>
              </div>
              <div className="col-3">
                <div className="contenedor-flyer-info">
                  <span className="texto-flyer-info-numeros">03</span>
                  <span className="texto-flyer-info-velocidad">Precio</span>
                  <span className="texto-flyer-info-especial">$80.000 USD</span>
                </div>
              </div>
            </div>
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
