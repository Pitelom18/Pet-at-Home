import React from 'react';
import {Form, Container} from 'react-bootstrap';
import usuarioImg from '../../assets/img/usuario.jpeg'
import './login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        usuario: "",
        pass: ""}
    }

    iniciarSesion(){
        alert('Boton de iniciar sesion');
    }

    render() { 
        return( 

        <><Container id='contact-wrapper'>
                <div className="login-box">
                    <img src={usuarioImg}
                        className="avatar"
                        alt="Avatar">

                    </img>
                    <h1 className="h4 text-gray-900 my-3">Bienvenido</h1>
                    <Form>
                        <Form.Group controlid="form-email">
                            <Form.Control
                                onChange={(e) => this.setState({ usuario: e.target.value })}
                                placeholder="Usuario" />
                        </Form.Group>
                        <br />
                        <Form.Group controlid="form-password" className="form-group">
                            <Form.Control
                                type="password"
                                onChange={(e) => this.setState({ pass: e.target.value })}
                                placeholder="Contraseña"
                                required />
                        </Form.Group>
                        <br />
                        <button type="submit" className="btn btn-primary btn-block justify-content-center" id="BTNENTRAR">Entrar</button>
                        <hr />


                        <a href="register.html" className="btn_registro">¿Aún no tienes cuenta? Registrarme</a>
                    </Form>
                </div>
            </Container>
            <div id="login-error" className="alert alert-danger d-none alert_error" role="alert">Usuario o contraseña incorrectos</div></>
         );
    }
};
