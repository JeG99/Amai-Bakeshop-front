import React from "react";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

class ItemCarrito extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre_prod:"Nombre producto",
            costo:"$X"
        }
    }

    render(){
        return(
            <div>
                <ListGroup.Item as="li">
                    <Container>
                        <Row>
                            <Col><h5>{this.state.nombre_prod}</h5></Col>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <p>Costo: {this.state.costo}</p>
                                </div> 
                            </Col>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <Button 
                                        className="deleteOrder">Eliminar</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default ItemCarrito;