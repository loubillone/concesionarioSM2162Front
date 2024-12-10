import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    validarLogin();
  };

  const validarLogin = () => {
    if (!email || !password) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
    }

    iniciarSesionBack(email, password);
  };

  const iniciarSesionBack = async (email, password) => {
    try {
      const resp = await testApi.post("/auth/login", {
        email,
        password,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: resp.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });

      document.getElementById("formularioLogin").reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.msg,
      });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Iniciar Sesión</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Form onSubmit={handleSubmit} id="formularioLogin">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <button className="btn btn-primary">Iniciar Sesión</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
