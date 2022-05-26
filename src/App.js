import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Carrito from "./Pages/Carrito";
import Catalogo from "./Pages/Catalogo";
import Producto from "./Pages/Producto";
import Catalogo_admin from "./Pages/Catalogo_admin";
import Producto_admin from "./Pages/Producto_admin";
import Pedidos_admin from "./Pages/Pedidos_admin";
import { Component } from "react";

class App extends Component {
  state = {
    data: null,
  };

  render() {
    return (
      <Router>
        <>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/shoppingcart">
              <Carrito />
            </Route>
            <Route path="/catalog">
              <Catalogo />
            </Route>
            <Route path="/catalogo_admin">
              <Catalogo_admin />
            </Route>
            <Route path="/producto_admin">
              <Producto_admin />
            </Route>
            <Route path="/pedidos_admin">
              <Pedidos_admin />
            </Route>
            <Router path="/product">
              <Producto />
            </Router>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
