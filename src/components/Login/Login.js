import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          pass: '',
          auth: false
        };
      }

    login() {
        this.authenticate()
            .then(res => this.setState({auth: res}))
            .catch(err => console.log(err));
    }

    authenticate = async() => {
        const res = await fetch('/signup', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: {
                email: this.state.email, 
                pass: this.state.pass
            }
        });
        const body = await res.json();
        if(res.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return(
            <>
                <Container >
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Correo Electronico </Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                    <Form.Text className="text-muted">
                                     <br></br>We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <br></br>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña 

                                    </Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.pass}
                                        onChange={e => this.setState({ pass: e.target.value })}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={ this.login }>
                                    Submit
                                </Button>
                                <p>{this.state.email}</p>
                                <p>{this.state.pass}</p>
                                <p>{this.state.auth}</p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Login;