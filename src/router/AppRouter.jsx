import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Vehiculos from "../pages/Vehiculos";
import QuienesSomos from "../pages/QuienesSomos";
import Contacto from "../pages/Contacto";
import Navegador from "../components/Navegador";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
