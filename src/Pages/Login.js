import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Pages.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      auth: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let body = {
      email: this.state.email,
      pass: this.state.pass
    };
    axios.post('http://54.162.93.237:8080/login', body, config)
    .then((res) => {
      if (res.data.auth) {
        this.props.history.push('/home');
        window.location.reload(false);
      }
      localStorage.setItem('user', JSON.stringify(res.data.auth));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
        <Container className="w-75 mt-5 rounded shadow">
          <Row className="align-items-stretch">
            <Col className="login-foto d-none d-lg-block"></Col>
            <Col>
              <h2 className="fw-bold text-center py-5">Bienvenido</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <Form.Text className="text-muted">
                    Descuida, no compartiremos tu información con nadie.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={this.state.pass}
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    name="connected"
                    className="form-check-input"
                  />
                  <label for="connected" className="form-check-label">
                    Mantener la sesión
                  </label>
                </div>
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    //href="/home"
                    className="login"
                  >
                    Iniciar sesión
                  </Button>
                </div>
                <div className="my-3">
                  <span>
                    ¿No tienes cuenta?{" "}
                    <a href="/signup" className="link">
                      Regístrate
                    </a>
                  </span>
                  <br></br>
                  <span>
                    <a href="#" className="link">
                      Recuperar contraseña
                    </a>
                  </span>
                </div>
                <p>{this.state.email}</p>
                <p>{this.state.pass}</p>
                <p>{this.state.auth}</p>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
