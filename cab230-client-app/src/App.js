import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Register from "./Pages/Register";
import ErrorPage from './Pages/ErrorPage';
import Volcano from './Pages/Volcano';
import Login from './Pages/Login';
//import React, { Component }  from 'react';
import React from 'react';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/volcano/:id" element={<Volcano />} />
      </Routes> 
    </Router> 
    
  );
}



export default App;
