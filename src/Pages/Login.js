import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Pages.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      auth: false,
    };
  }

  login() {
    this.authenticate()
      .then((res) => this.setState({ auth: res }))
      .catch((err) => console.log(err));
  }

  authenticate = async () => {
    const res = await fetch("/signup", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: {
        email: this.state.email,
        pass: this.state.pass,
      },
    });
    const body = await res.json();
    if (res.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <>
        <Container className="w-75 mt-5 rounded shadow">
          <Row className="align-items-stretch">
            <Col className="login-foto d-none d-lg-block"></Col>
            <Col>
              <h2 className="fw-bold text-center py-5">Bienvenido</h2>
              <Form>
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
                    onClick={this.login}
                    href="/home"
                  >
                    Iniciar sesión
                  </Button>
                </div>
                <div className="my-3">
                  <span>
                    ¿No tienes cuenta? <a href="/signup">Regístrate</a>
                  </span>
                  <br></br>
                  <span>
                    <a href="#">Recuperar contraseña</a>
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

export default Login;
