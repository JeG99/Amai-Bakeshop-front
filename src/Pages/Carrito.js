import React from "react";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navbar from "../components/Navbar";
import ItemCarrito from "../components/ItemCarrito";
import axios from 'axios';
import url from '../URL';
import qr from '../assets/qr.png';
import {withRouter} from 'react-router-dom';

class Carrito extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lista_carrito: [],
            total: 0
        };
    }

    componentDidMount = () => {
        let config = {
        headers: {
            'Content-Type': 'application/json'
        }
        };
        let body = {
            uid: JSON.parse(localStorage.getItem('user'))._id,
            state: 'pending'
        };
        axios.post(url + '/user_orders', body, config)
        .then((res) => {
            if (res.data.orders) {
                this.setState({lista_carrito: res.data.orders})
                this.state.lista_carrito.map((e) => {this.state.total += e.price})
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    payOrders = () => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
            };
            let body = {
                uid: JSON.parse(localStorage.getItem('user'))._id,
            };
            axios.post(url + '/close_orders', body, config)
            .then((res) => {
                if (res.data) {
                    console.log(res.data.orders);
                    this.props.history.push('/catalog');
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
                                {this.state.lista_carrito.map((e) => <ItemCarrito key={e._id} nombre_prod={e.product_name} costo={e.price} />)}
                                {/* Espacio donde se calcula la cantidad total de la orden */}
                                <ListGroup.Item as="li">
                                    <div className="d-flexbox justify-content-center">
                                        <p>Total: ${this.state.total}</p>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Image width="200" src={qr}/>
                        <Col className="mt-3">
                            <div className="d-grid gap-2">
                                <Button 
                                    className="pay" 
                                    size="lg"
                                    onClick={this.payOrders}>
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

export default withRouter(Carrito);