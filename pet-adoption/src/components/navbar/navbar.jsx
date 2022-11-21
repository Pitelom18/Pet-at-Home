import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import logo from "../../assets/img/logo inicio.png";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar id="navbar" expand="lg">
        <Container id="navbar-container">
          <Nav>
            <ul>
              <li>
                <Nav.Link href="index">
                  <img src={logo} alt="logoPets" className="logo"></img>
                </Nav.Link>
              </li>
              <li>
                {/* <Nav.Link></Nav.Link> */}
              </li>
              <li>
                {/* <Nav.Link></Nav.Link> */}
              </li>
              <li>
                {/* <Nav.Link></Nav.Link> */}
              </li>
              <li>
                {/* <Nav.Link></Nav.Link> */}
              </li>
              <li>
                {/* <Nav.Link></Nav.Link> */}
              </li>
              <li>
               
              </li>
              <li>
                <Nav.Link href="index">Inicio</Nav.Link>
              </li>
              <li>
                <Nav.Link href="nosotros">Nosotros</Nav.Link>
              </li>
              <li>
                <Nav.Link href="home.html">Adopta</Nav.Link>
              </li>
              <li>
                <Nav.Link href="donacion.html">Donacion</Nav.Link>
              </li>
              <li>
                <Nav.Link href="contact.html">Contacto</Nav.Link>
              </li>
              <li>
                <Nav.Link id="btn-login" className="cta" href="login">login</Nav.Link>                
              </li>
              
            </ul>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
