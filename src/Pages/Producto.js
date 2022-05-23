import React from 'react'
import {Button, Card, ListGroup, Badge} from "react-bootstrap";
import pastel1 from '../assets/pastel1.jfif';
import Navbar from "../components/Navbar"

function Producto() {
  return (
    <div className="Descripcion">
        <Navbar/>
        <div className="mt-4 container d-flex justify-content-center align-items-center h-100">
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
                    

                    <h4 className='mt-3'>
                        Pastel personalizado <Badge bg="secondary">Nuevo</Badge>
                    </h4>
                   
                    <ListGroup>
                        <ListGroup.Item className="header">
                            Descripción
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className='container mt-2'>
                                <p>Descripción breve del producto</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <br></br>
                    
                    <Button 
                        className='pay'
                        href="/catalog"
                    >Añadir al carrito</Button>
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Producto