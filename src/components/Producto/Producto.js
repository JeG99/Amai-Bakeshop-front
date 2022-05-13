import React from 'react'
import {Button, Card, ListGroup, Badge} from "react-bootstrap";
import './Producto.css'
import pastel1 from '../../assets/pastel1.jfif';


function Producto() {
  return (
    <div className="Descripcion">
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="col">
                    <Card style={{ width: '20rem' }}>
                        <div>
                            <Card.Img variant="top" src={pastel1} />
                        </div>
                        
                        <Card.Body>
                            <Card.Title>Pastel de vainilla flork</Card.Title>
                            <Card.Text>
                            Precio: $350
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="col">
                    <br></br>
                    <br></br>

                    <h4>
                        Pastel personalizado <Badge bg="secondary">Nuevo</Badge>
                    </h4>
                   
                    <ListGroup>
                        <ListGroup.Item as="li" active>
                            Ingredientes:
                        </ListGroup.Item>
                        <ListGroup.Item>Harina</ListGroup.Item>
                        <ListGroup.Item>Agua</ListGroup.Item>
                        <ListGroup.Item>Vainilla</ListGroup.Item>
                        <ListGroup.Item>Mantequilla</ListGroup.Item>
                        <ListGroup.Item>Azucar</ListGroup.Item>
                    </ListGroup>
                    <br></br>
                    
                    <Button variant="primary">Añadir al carrito</Button>
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Producto