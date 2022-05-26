import React from 'react';
import {Button, Card, ListGroup, Badge} from "react-bootstrap";
import pastel1 from '../assets/pastel1.jfif';
import Navbar from "../components/Navbar";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            price: this.props.location.state.price,
            image: this.props.location.state.image,
            description: this.props.location.state.description
        }
    }

    addToCart = event => {
        event.preventDefault()
        let config = {
        headers: {
            'Content-Type': 'application/json'
        }
        };
        let body = {
            uid: JSON.parse(localStorage.getItem('user'))._id,
            product_name: this.state.title,
            price: this.state.price,
            state: 'pending'
        };
        axios.post('http://localhost:8080/create_order', body, config)
        .then((res) => {
            if (res.data) {
                console.log(res.data);
                this.props.history.push('/shoppingcart');
                window.location.reload(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() { 
        return (
            <div className="Descripcion">
                <Navbar/>
                <div className="mt-4 container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <div>
                                    <Card.Img variant="top" src={this.state.image} />
                                </div>
                                
                                <Card.Body>
                                    <Card.Title>{this.state.title}</Card.Title>
                                    <Card.Text>
                                    Precio: ${this.state.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <h4 className='mt-3'>
                                Pastel personalizado <Badge bg="secondary">Nuevo</Badge>
                            </h4>
                        
                            <ListGroup>
                                <ListGroup.Item className="header">
                                    Descripción
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='container mt-2'>
                                        <p>{this.state.description}</p>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <br></br>
                            
                            <Button 
                                className='pay'
                                href="/catalog"
                                onClick={this.addToCart}
                            >Añadir al carrito</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Producto)