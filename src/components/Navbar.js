import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./Navbar.css";
import foto from "./navbar.jpg";
import { withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/login');
    window.location.reload(false);
  }

  render() {
    return (
      <Nav class="navbar navbar-expand-lg pb-3">
        <div className="container">
          <a class="navbar-brand" href="/home">
            <img src={foto} class="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="bi bi-list"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/home">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/catalog">
                  Catalogo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/profile">
                  Perfil
                </a>
              </li>
              <li class="nav-item">
                <a onClick={this.logout} class="nav-link" href="">
                  Logout
                </a>
              </li>
            </ul>
            <span>
              <a href="/shoppingcart"><i class="bi bi-cart-fill"></i></a>
            </span>
          </div>
        </div>
      </Nav>
    );
  }
}

export default withRouter(App);
