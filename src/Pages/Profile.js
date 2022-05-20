import React from "react";
import { Card, Container, ListGroupItem, Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Navbar from "../components/Navbar";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nombre Usuario",
      profilename: "Nombre Perfil",
      profilepic:
        "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container fluid="md">
          <Row className="d-flexbox justify-content-md-center" style={{ marginTop: "30px" }}>
            <Col xs={12} sm={4} md={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  style={{ width: "15rem" }}
                  variant="top"
                  src={this.state.profilepic}
                  alt="userpic"
                />
                <Card.Body>
                  <Card.Title>{this.state.username}</Card.Title>
                  <Card.Title>{this.state.profilename}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flexbox justify-content-md-center">
            <Col className="w-75">
              {/* Espacio para el historial de compra*/}
              <div style={{ marginTop: "30px" }}>
                <ListGroup>
                  <ListGroupItem><h4>Historial de ordenes</h4></ListGroupItem>
                  <ListGroupItem>Compra #1</ListGroupItem>
                  <ListGroupItem>Compra #2</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
