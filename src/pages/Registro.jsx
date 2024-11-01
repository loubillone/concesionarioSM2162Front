import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

const Registro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    validarDatosForm();
  };

  const validarDatosForm = () => {
    if (!name || !lastName || !email || !password || !confPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
    }

    const validarNombre =
      /^(?!.*\s{2})[A-Za-zÑñáéíóúÁÉÍÓÚ]+(\s[A-Za-zÑñáéíóúÁÉÍÓÚ]+)?$/;
    const resultadoValidacionNombre = validarNombre.test(name);

    if (!resultadoValidacionNombre) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre inválido",
      });
    }

    const validarApellido =
      /^(?!.*\s{2})[A-Za-zÑñáéíóúÁÉÍÓÚ]+(\s[A-Za-zÑñáéíóúÁÉÍÓÚ]+)?$/;
    const resultadoValidacionApellido = validarApellido.test(lastName);

    if (!resultadoValidacionApellido) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Apellido inválido",
      });
    }

    const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const resultadoValidacionEmail = validarEmail.test(email);

    if (!resultadoValidacionEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email inválido",
      });
    }

    const validarPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const resultadoValidacionPass = validarPass.test(password);

    if (!resultadoValidacionPass) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña inválida, debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
      });
    }

    if (password !== confPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }

    registrarUsuarioBackend(
      name.toLowerCase().trim(),
      lastName.toLowerCase().trim(),
      email.toLowerCase().trim(),
      password.trim()
    );
  };

  const registrarUsuarioBackend = async (name, lastName, email, password) => {
    try {
      const resp = await testApi.post("/auth/crearUsuario", {
        name,
        lastName,
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

      document.getElementById("formularioRegistro").reset();
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
            <h1>Registrarse</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Form onSubmit={handleSubmit} id="formularioRegistro">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>

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

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => {
                    setConfPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <button className="btn btn-primary">Registrarme</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
