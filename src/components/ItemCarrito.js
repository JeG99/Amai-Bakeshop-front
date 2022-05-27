import React from "react";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import url from '../URL';
import axios from 'axios';

class ItemCarrito extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre_prod: props.nombre_prod,
            costo:"$" + props.costo
        }
    }

    deleteProduct = event => {
        event.preventDefault();
        let config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        let body = {
            uid: JSON.parse(localStorage.getItem('user'))._id,
            name: this.state.nombre_prod
        };
        axios.post(url + '/delete_order', body, config)
        .then((res) => {
            if (res.data.result) {
                window.location.reload(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });
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
                                    <Button onClick={this.deleteProduct}
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