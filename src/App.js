import "./App.css";
import { MainMenu } from "./components/MainMenu";
import logo from "./img/logo.png";
import playa_2 from "./img/playa_2.jpg";
import Home from "./components/Home";
import MisReservas from "./components/MisReservas";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const loggedIn = [
    { usuario: '' },
    { password: '' }
    ];
  return (
    <Router>
      <main>
        <header className="container-main-header">
          <img
            className="logo"
            src={logo}
            alt="Icutter Store"
            heigth="100px"
            width="100px"
          />
          <MainMenu />
          <img
            className="logo"
            src={playa_2}
            alt="Icutter Store"
            heigth="100px"
            width="100px"
          />
        </header>
        <Switch className="container-main">
          <Route exact path="/">
            {loggedIn ? <Redirect to="/Home" /> : <Login />}
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
            <Home />
          </Route>
          <Route path="/MisReservas">
            <MisReservas />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
