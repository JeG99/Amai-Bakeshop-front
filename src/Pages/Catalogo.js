import React from 'react'
import {Button, Card} from "react-bootstrap";
import Navbar from "../components/Navbar"
import Item from "../components/Item"
import pastel from '../assets/cake.jpg';
import axios from 'axios';

class Catalogo extends React.Component {
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
                <Navbar/>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row mt-3">
                        <div className='container d-flex justify-content-center'>
                            <h2>Catalogo de Pasteles</h2>
                        </div>
                        {this.state.products.map((e) => <Item key={e._id} title={e.product_name} price={e.price} image={pastel} description={e.description} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalogo