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
    <div>
      <div className="container contenedor-card">
        <div className="row">
          <div className="container">
            <div className="row">
              {novedades.map((card, index) => (
                <div
                  className="col-10 offset-1 col-md-6 offset-md-0"
                  key={index}
                >
                  <Card
                    className="card-novedades"
                    style={{
                      backgroundColor: card.backgroundColor,
                      borderRadius: "1rem",
                      border: "none",
                    }}
                  >
                    <Card.Body className="card-body-novedades">
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
                          style={{
                            backgroundColor: card.backgroundColorButtom,
                          }}
                          className="boton-card-novedades"
                        >
                          Contactar
                        </button>
                      </a>

                      <Card.Img
                        variant="top"
                        src={card.imagen}
                        className="imagen-card-novedades"
                      />
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNovedades;
