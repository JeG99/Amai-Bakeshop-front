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
import { NavLink } from "react-bootstrap";
import { Component } from "react";

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
          </Switch>
          <p>{this.state.data}</p>
        </div>
      </Router>
    );
  }
}

export default App;
