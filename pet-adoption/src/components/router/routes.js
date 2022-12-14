import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import Registro from "../register/register";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/index" element={<Inicio />}></Route> 
        <Route exact path="/register" element={<Registro />}></Route> 
        <Route path="/*" element={
            <h1 style={{ marginTop: 300 }}> 404 <br /> Página no encontrada </h1>}>
        </Route>
        
      </Routes>
    </Router>
  );
}