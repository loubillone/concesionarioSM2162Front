import React from "react";
import "../css/cardNovedades.css";
import Card from "react-bootstrap/Card";

import toyotaCorolla from "../assets/image/cardNovedades/toyotaCorolla.png";
import fordFiesta from "../assets/image/cardNovedades/fordFiesta.png";

const CardNovedades = () => {
  const novedades = [
    {
      titulo: "Toyota Corolla 2018: Confiabilidad y Valor en Autos Usados",
      subtitulo: "Eficiencia y Durabilidad en Cada Kilómetro",
      imagen: toyotaCorolla,
      backgroundColor: "#FFAE00",
      backgroundColorButtom: "#1f1f1f",
    },

    {
      titulo: "Ford Fiesta 2017: Compacto, Eficiente y Divertido",
      subtitulo: "Agilidad y Estilo en Cada Trayecto",
      imagen: fordFiesta,
      backgroundColor: "#1F1F1F",
      backgroundColorButtom: "#FFAE00",
    },
  ];
  return (
    <div className="container contenedor-card">
      <div className="row g-4 justify-content-center">
        {novedades.map((card, index) => (
          <div
            className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0"
            key={index}
          >
            <Card
              className="card-novedades h-100"
              style={{
                backgroundColor: card.backgroundColor,
                borderRadius: "1rem",
                border: "none",
              }}
            >
              <Card.Body className="card-body-novedades">
                <div className="card-novedades-text">
                  <Card.Title className="titulo-card-novedades">
                    {card.titulo}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 subtitulo-card-novedades">
                    {card.subtitulo}
                  </Card.Subtitle>

                  <a
                    href="https://api.whatsapp.com/send?phone=543815187503&text=Hola!%20Tengo%20una%20consulta%20para%20hacerte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      style={{
                        backgroundColor: card.backgroundColorButtom,
                      }}
                      className="boton-card-novedades"
                    >
                      Contactar
                    </button>
                  </a>
                </div>

                <div className="card-novedades-img-wrap">
                  <Card.Img
                    src={card.imagen}
                    alt=""
                    className="imagen-card-novedades"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNovedades;
