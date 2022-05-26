import React from 'react'
import {Button, Card, Figure, Form, Container, Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";

function Pedidos_admin() {
  return (
    
    <div>
        <Container className="w-75">
            <Row className="mt-3 d-flexbox justify-content-center">
                <Col xs={12} sm={4} md={4}><h2>Lista del pedidos</h2></Col>
                <br></br>
                <br></br>
                <br></br>
            </Row>
            <Row>
                <Col>
                    <h4>Producto:</h4>
                </Col>
                <Col>
                    <h4>Cliente:</h4>
                </Col>
                <Col>
                    <h4>Fecha:</h4>
                </Col>
                <Col>
                    <h4>Estado:</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ListGroup as="ul">
                       
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <Col><h5>Pastel de chocolate</h5></Col>
                            <Col><h5>Rodrigo</h5></Col>
                            <Col><h5>13-09-2020</h5></Col>
                            <Col><Button variant="primary">Entregar</Button>{' '}</Col>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <Col><h5>Pastel de vainilla</h5></Col>
                            <Col><h5>Alejandro</h5></Col>
                            <Col><h5>13-09-2020</h5></Col>
                            <Col><Button variant="primary" disabled>
                                    Entregado
                                </Button>{' '}
                            </Col>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <Col><h5>Pastel de Zanahoria</h5></Col>
                            <Col><h5>Juan Pablo</h5></Col>
                            <Col><h5>13-09-2020</h5></Col>
                            <Col><Button variant="primary">Entregar</Button>{' '}</Col>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <Col><h5>Pastel de tres leches</h5></Col>
                            <Col><h5>Elias</h5></Col>
                            <Col><h5>13-09-2020</h5></Col>
                            <Col><Button variant="primary">Entregar</Button>{' '}</Col>
                        </ListGroup.Item>
                        
                        {/* Abajo se generara la lista de productos del carrito */}
                    
                        {/* Espacio donde se calcula la cantidad total de la orden */}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    
    </div>
              
  )
}

export default Pedidos_admin