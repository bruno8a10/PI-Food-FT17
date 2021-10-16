import './App.css';
import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Home from "./components/home/home";
import Alta from "./components/alta/alta";

function App() {
  return (
    <BrowserRouter>
    <Route exact path = "/" component ={LandingPage}/>
    <Route exact path = "/home" component ={Home}/>
    <Route exact path = "/alta" component ={Alta}/>
</BrowserRouter>
  );
}

export default App;
