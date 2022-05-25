import React from 'react'
import {Button, Card, ListGroup, Badge, Form, Figure} from "react-bootstrap";
import './Producto_admin.css'
import pastel1 from '../../assets/pastel1.jfif';


function Producto_admin() {
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
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                              
                                <Button variant="primary" type="submit">
                                    Añadir foto
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="col">
                    <br></br>
                    <br></br>

                    <h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subtitulo</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Form>
                    </h4>
                   
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <br></br>
                    
                    <Button variant="primary">Guardar</Button>
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Producto_admin