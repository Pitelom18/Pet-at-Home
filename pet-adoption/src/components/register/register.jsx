import React from "react";

import { Container, Form, Button, Nav } from "react-bootstrap";
import "./register.css";

export default class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
      repPass: "",
      name: "",
      lastName: "",
      email: "",
    };
  }

  registrar() {
    alert("Usuario registrado");
  }

  render() {
    return (
      <>
        <Container id="register_container" className="body_register">
          <Form>
            <Form.Group className="mb-3" controlid="userName">
              <Form.Label className="input-userName">
                Nombre de usuario
              </Form.Label>
              <Form.Control
                id="input-username"
                type="text"
                onChange={(e) => this.setState({ usuario: e.target.value })}
                placeholder="Nombre de usuario"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="Password">
              <Form.Label className="input-contrasena">Contraseña</Form.Label>
              <Form.Control
                id="input-contrasena"
                type="password"
                onChange={(e) => this.setState({ pass: e.target.value })}
                placeholder="Contraseña"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlid="repeatPassword">
              <Form.Label className="input-password">
                Repetir contraseña
              </Form.Label>
              <Form.Control
                id="input-contrasena-repeat"
                type="password"
                onChange={(e) => this.setState({ repPass: e.target.value })}
                placeholder="Repetir contraseña"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlid="Name">
              <Form.Label className="input-nombres">Nombres</Form.Label>
              <Form.Control
                id="input-name"
                type="text"
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Nombres"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlid="lastName">
              <Form.Label className="input-lastName">Apellidos</Form.Label>
              <Form.Control
                id="input-apellidos"
                type="text"
                onChange={(e) => this.setState({ lastName: e.target.value })}
                placeholder="Apellidos"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlid="email">
              <Form.Label className="input-email">Email</Form.Label>
              <Form.Control
                id="input-email"
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email"
              ></Form.Control>
            </Form.Group>
            <Button
              onClick={() => {
                this.registrar();
              }}
              type="submit"
              className="btn btn-primary btn-block justify-content-center"
              id="BTREGISTER"
            >
              Registrar Usuario
            </Button>
            <div
              id="register-error"
              className="alert alert-danger d-none"
              role="alert"
            ></div>
            <Nav.Link href="login">¿Ya tienes cuenta? Iniciar sesión</Nav.Link>
          </Form>
        </Container>
      </>
    );
  }
}
