import React from 'react';
import AppRoutes from './components/router/routes';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar'
// import Login from './components/login/login'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Menu />
      <Container>
        {/* <Inicio /> */}
        <AppRoutes />
      </Container>
      {/* <Login /> */}
    </div>


    </React.Fragment>
    
  );
}

export default App;
