import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import url from '../URL';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      email: "",
      pass: "",
      confirm_pass: "",
    };
  }

  validateForm() {
    return (
      this.state.user_name.lenght > 0 &&
      this.state.email.lenght > 0 &&
      this.state.pass === this.state.confirm_pass
    );
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
      name: this.state.user_name,
      pass: this.state.pass
    };
    axios.post(url + '/signup', body, config)
    .then((res) => {
      if (res.data.acc) {
        this.props.history.push('/login');
        window.location.reload(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
        <Container
          className="w-50 mt-5 rounded shadow"
          style={{ padding: "20px 15px 20px 15px" }}
        >
          <Row>
            <Col>
              <h2 className="fw-bold text-center py-3">Registro</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={this.state.user_name}
                    onChange={(e) =>
                      this.setState({ user_name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo Electronico </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <Form.Text className="text-muted">
                    <p>We'll never share your email with anyone else.</p>
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={this.state.pass}
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmar Contraseña"
                    value={this.state.confirm_pass}
                    onChange={(e) =>
                      this.setState({ confirm_pass: e.target.value })
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  //href="/login"
                  className="signup"
                >
                  Registrarse
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Signup);
