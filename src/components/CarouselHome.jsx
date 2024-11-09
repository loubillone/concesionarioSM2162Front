import React from "react";
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
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={renaultBigster}
            alt="renault bigster"
          />
          <Carousel.Caption>
            <h3>RENAULT BIGSTER</h3>
            <p>
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE OK Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="btn btn-primary">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={vvGolf} alt="volkswagen golf" />
          <Carousel.Caption>
            <h3>VOLKSWAGEN GOLF</h3>
            <p>
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE OK Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="btn btn-primary">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toyotaHilux} alt="toyota hilux" />
          <Carousel.Caption>
            <h3>TOYOTA HILUX</h3>
            <p>
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE OK Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="btn btn-primary">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fordRanger} alt="ford ranger" />
          <Carousel.Caption>
            <h3>FORD RANGER</h3>
            <p>
              ENCUENTRA EL AUTO PERFECTO: COMPRA Y VENTA DE OK Y USADOS CON
              SEGURIDAD Y GARANTÍA
            </p>
            <button className="btn btn-primary">CONTACTAR</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
