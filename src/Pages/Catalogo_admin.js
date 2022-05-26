import React from 'react'
import {Button, Card} from "react-bootstrap";
import './Catalogo_admin.css'
import pastel from '../assets/cake.jpg';
import Item_admin from "../components/Item_admin"
import axios from "axios";

class Catalogo_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        //event.preventDefault();
        axios.get('http://54.162.93.237:8080/product_list')
        .then((res) => {
            if (res.data.products) {
                this.setState({products: res.data.products})
                console.log(this.state.products)
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="Formato">
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <Button href="/Producto_admin" variant="success">Añadir un producto</Button>{' '}
                        {this.state.products.map((e) => <Item_admin key={e._id} title={e.product_name} price={e.price} image={pastel} description={e.description} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalogo_admin