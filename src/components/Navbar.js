import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Amai Bakeshop</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">Signup</NavLink>
              <NavLink href="/profile">Profile</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default App;
