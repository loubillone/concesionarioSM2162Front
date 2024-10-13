import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [usuario, setUsuario] = useState(() => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : []; // Si existen, cargarlos, si no, array vacío
  });

  useEffect(() => {
    // Evitar guardar un array vacío en localStorage cuando cargamos por primera vez
    if (usuario.length > 0) {
      localStorage.setItem("usuarios", JSON.stringify(usuario));
    }
  }, [usuario]); // Se ejecuta cada vez que el estado "usuario" cambia

  const handleSubmit = (e) => {
    e.preventDefault();

    validarDatosForm();
  };

  const validarDatosForm = () => {
    if (!name || !email || !password || !confPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
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
    } else if (password !== confPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const nuevoUsuario = { name, email, password };

    setUsuario([nuevoUsuario, ...usuario]);
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
            <Form onSubmit={handleSubmit}>
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
