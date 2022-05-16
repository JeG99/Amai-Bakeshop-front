import React from "react";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Carrito de compras</h2>
                </div>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        Lista del Carrito
                    </ListGroup.Item>
                    {/* Abajo se generara la lista de productos del carrito */}
                    <ListGroup.Item as="li">
                        <div>
                            <h5>Nombre de Producto</h5>
                            <Button className="danger">Eliminar</Button>
                        </div>
                        <div>
                            <p>Detalles de la orden</p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Carrito;