import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar'
// import Login from './components/login/login'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Menu />
      {/* <Login /> */}
    </div>


    </React.Fragment>
    
  );
}

export default App;
