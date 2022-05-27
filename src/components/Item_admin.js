import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import url from '../URL';

class Item_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            price: props.price,
            image: props.image,
            description: props.description
        };
    }

    deleteProduct = event => {
        event.preventDefault();
        let config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        let body = {
            name: this.state.title
        };
        axios.post(url + '/delete_product', body, config)
        .then((res) => {
            if (res.data.result) {
                window.location.reload(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="col-md-4">
                <Card className="mt-3 rounded shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>
                        Precio: ${this.state.price}
                        </Card.Text>
                        <Button onClick={this.deleteProduct} variant="danger">Eliminar</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withRouter(Item_admin);