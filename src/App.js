//import logo from './logo.svg';
//import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Catalogo from "./components/Catalogo/Catalogo";
import Producto from "./components/Producto/Producto";

import { NavLink } from "react-bootstrap";
import { Component } from "react";
import Catalogo_admin from "./components/Catalogo_admin/Catalogo_admin";
import Producto_admin from "./components/Producto_admin/Producto_admin";

class App extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/login">Amai Bakeshop</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink href="/login">
                  Login
                </NavLink>
                <NavLink href="/signup">
                  Signup
                </NavLink>
                <NavLink href="/profile">
                  Profile
                </NavLink>
                <NavLink href="/catalogo">
                  Catalogo
                </NavLink>
                <NavLink href="/producto">
                  Producto
                </NavLink>
                <NavLink href="/catalogo_admin">
                  Catalogo_admin
                </NavLink>
                <NavLink href="/producto_admin">
                  Producto_admin
                </NavLink>
              </Nav>
            </Container>
          </Navbar>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/catalogo">
              <Catalogo />
            </Route>
            <Route path="/producto">
              <Producto />
            </Route>
            <Route path="/catalogo_admin">
              <Catalogo_admin />
            </Route>
            <Route path="/producto_admin">
              <Producto_admin />
            </Route>
          </Switch>
          <p>{this.state.data}</p>
        </div>
      </Router>
    );
  }
}

export default App;
