import React from 'react'
import {Button, Card, ListGroup, Badge, Form, Figure} from "react-bootstrap";
import './Producto_admin.css'
import pastel1 from '../assets/pastel1.jfif';
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Producto_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            image: "",
            description: ""
        }
    }

    fileSelectedHandler = event => {
        this.setState({image: event.target.files[0]});
    }

    submitProduct = event => {
        event.preventDefault();
        let config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        let body = {
            product_name: this.state.title,
            price: this.state.price,
            photo: JSON.stringify(this.state.image),
            description: this.state.description
        };
        console.log(body);
        console.log(this.state.image);
        axios.post('http://54.162.93.237:8080/create_product', body, config)
        .then((res) => {
            if (res) {
                console.log(res);
                this.props.history.push('/catalogo_admin');
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
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <div>
                                    <Figure>
                                        <Figure.Image
                                            width={1200}
                                            height={1600}
                                            alt="1200x1600"
                                            src=""
                                        />
                                    </Figure>
                                </div>
                                
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="" 
                                                value={this.state.title}
                                                onChange={(e) => this.setState({ title: e.target.value })}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Precio</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="" 
                                                value={this.state.price}
                                                onChange={(e) => this.setState({ price: e.target.value })}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Imagen</Form.Label>
                                            <Form.Control 
                                                type="file" 
                                                placeholder="" 
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </Form.Group>
                                    </Form>

                                    <br></br>
                        
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Descripcion</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3} 
                                                value={this.state.description}
                                                onChange={(e) => this.setState({ description: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Form>
                                    <br></br>
                                    
                                    <Button type="submit" onClick={this.submitProduct} variant="primary">Guardar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Producto_admin);