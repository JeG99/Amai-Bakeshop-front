import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "Nombre Usuario",
            profilename: "Nombre Perfil",
            profilepic: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
        };
    }
    
    render(){
        return(
            <div>
                <Card style={{width: '15rem'}}>
                <Card.Img style={{width: '15rem'}} variant="top" src={this.state.profilepic} alt="userpic"/>
                    <Card.Body>
                        <Card.Title>{this.state.username}</Card.Title>
                        <Card.Title>{this.state.profilename}</Card.Title>
                    </Card.Body>
                </Card>

                {/* Espacio para el historial */} 
                <div style={{marginTop: '30px'}}>
                    <ListGroup>
                        <ListGroupItem>Compra #1</ListGroupItem>
                        <ListGroupItem>Compra #2</ListGroupItem>
                    </ListGroup>
                </div>            
            </div>
        )
    }
}

export default Profile;