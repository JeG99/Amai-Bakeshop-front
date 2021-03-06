import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            price: props.price,
            image: props.image,
            description: props.description
        }
    }

    redirectToProductPage = () => {
        this.props.history.push({
            pathname: '/product',
            state: this.state
        });
        window.location.reload(false);
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
                        <Button 
                            className='pay'
                            onClick={this.redirectToProductPage}
                            //href="/product"
                        >Detalles</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withRouter(Item);