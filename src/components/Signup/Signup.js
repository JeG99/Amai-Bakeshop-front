import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Signup extends React.Component{
    render(){
        return(
            <>
                 <Container >
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Nombre </Form.Label>
                                    <Form.Control type="email" placeholder="Nombre" />
                                </Form.Group>
                                <br></br>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Correo Electronico </Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                    <Form.Text className="text-muted">
                                     <br></br>We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <br></br>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña 
                                        
                                    </Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Signup;