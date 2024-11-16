import React, { useState } from "react";
import "../css/carouselHome.css";
import Carousel from "react-bootstrap/Carousel";
import renaultBigster from "../assets/image/carousel/renaultBigster.png";
import vvGolf from "../assets/image/carousel/vwGolf.png";
import toyotaHilux from "../assets/image/carousel/toyotaHilux.png";
import fordRanger from "../assets/image/carousel/fordRanger.png";
import whatsappIcon from "../assets/image/carousel/whatsappIcon.png";

const CarouselHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        controls={false}
        indicators={false}
        interval={4000}
        pause={false}
        activeIndex={activeIndex}
        onSelect={handleSelect}

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
            <a
              href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-item-carousel">CONTACTAR</button>
            </a>

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
            <a
              href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-item-carousel">CONTACTAR</button>
            </a>

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
          <img className="d-block w-100" src={toyotaHilux} alt="toyota hilux" />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">TOYOTA HILUX</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-item-carousel">CONTACTAR</button>
            </a>

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
          <img className="d-block w-100" src={fordRanger} alt="ford ranger" />
          <Carousel.Caption className="contenedor-texto-carousel">
            <h3 className="titulo-item-carousel">FORD RANGER</h3>
            <p className="texto-item-carousel">
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE 0KM Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-item-carousel">CONTACTAR</button>
            </a>

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
      </Carousel>

      <div className="contenedor-barra">
        <div className="barra-flyer">
          <span className="barra-flyer-numero">{`0${activeIndex + 1}`}</span>
        </div>

        <div className="contenedor-iconos">
          <a
            href="https://www.facebook.com/profile.php?id=100046230890961"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook icono-flyer" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.instagram.com/sanmartin2162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram icono-flyer" aria-hidden="true"></i>
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-twitter icono-flyer-twitter"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>

      <div>
        <a
          href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappIcon}
            alt="icono whatsapp"
            className="icono-whatsapp"
          />
        </a>
      </div>
    </div>
  );
};

export default CarouselHome;
