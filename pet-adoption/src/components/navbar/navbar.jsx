import React from 'react';
import {Container, Navbar} from 'react-bootstrap'
import './navbar.css'
import logo from '../../assets/img/logo inicio.png'


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
        <Navbar  id="navbar" expand="lg"> 
            
            <Container id="navbar-container">              
           
            
            <header>
            
            <ul >
                <li><a href="#">
                    <img 
                src={logo} 
                alt="logoPets" 
                className="logo">
                    </img></a></li>
                <li><a ></a></li>
                <li><a ></a></li>
                <li><a ></a></li>
                <li><a ></a></li>
                <li><a ></a></li>
                <li><a ></a></li>
                <li><a href="#">Inicio</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="home.html">Adopta</a></li>
                <li><a href="donacion.html">Donacion</a></li>
                <li><a href="contact.html">Contacto</a></li> 
                <li><a className = "cta" href="login.html">Login</a></li>                
                {/* <Navigate to = "login" className = "cta" ><li>Login</li></Navigate> */}
            </ul>
        
            </header>   
            
          
        </Container>
    </Navbar>
            

            
         );
    }
}

