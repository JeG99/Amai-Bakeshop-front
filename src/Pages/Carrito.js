import React from "react";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";

class Carrito extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lista_carrito: []
        };
    }

    displayList(){
    }

    deleteOrder(i){
        this.state.lista_carrito.splice(i,1)
    }

    payOrder(){
    }

    render(){
        return(
            <div>
                <Navbar />
                <Container className="w-75">
                    <Row className="mt-3 d-flexbox justify-content-center">
                        <Col xs={12} sm={4} md={4}><h2>Carrito de compras</h2></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <h3>Lista del Carrito</h3>
                                </ListGroup.Item>
                                {/* Abajo se generara la lista de productos del carrito */}
                                <ListGroup.Item as="li">
                                    <Container>
                                        <Row>
                                            <Col><h5>Nombre de Producto</h5></Col>
                                            <Col>
                                                <div className="d-flex flex-row-reverse">
                                                    <Button className="deleteOrder">Eliminar</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col>
                                                <p>Cantidad: X</p>
                                                <p>Costo: X</p>
                                            </Col>
                                            
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                {/* Espacio donde se calcula la cantidad total de la orden */}
                                <ListGroup.Item as="li">
                                    <div className="d-flexbox justify-content-center">
                                        <p>Total: X</p>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col className="mt-3">
                            <div className="d-grid gap-2">
                                <Button className="pay" size="lg">
                                    Pagar
                                </Button>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Carrito;