import React from "react";
import Carousel from "react-bootstrap/Carousel";
import renaulBigster from "../assets/image/carousel/renaultBigster.png";
import vvGolf from "../assets/image/carousel/vwGolf.png";
import toyotaHilux from "../assets/image/carousel/toyotaHilux.png";
import fordRanger from "../assets/image/carousel/fordRanger.png";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={renaulBigster}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={vvGolf} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toyotaHilux} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fordRanger} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Some descriptive text for the fourth slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
