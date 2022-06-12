import React from "react";
import {
  Navbar,
  Image,
  Nav,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
} from "react-bootstrap";
import NavLinks from "./NavLinks";
import bitcoinImage from "../img/bitcoinImage.jpg";
const Footer = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };
  return (
    // bg="dark" variant="dark"
    <Row className="g-0">
      <Col md={{ span: 10, offset: 1 }} className="footer-nav">
        <br />
        <p>
          From its inception, Shiba Inu has done things differently. Starting
          with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
          Uniswap, then “burned” the other half to Ethereum co-founder Vitalik
          Buterin for safekeeping.
        </p>
      </Col>
      <Col className="my-auto" md={5}>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Row>
        <p className="footer-copyright">
          Website by &copy;
          <a href="" className="footer-link">
            {" "}
            Pangoin Team
          </a>
        </p>
      </Row>
    </Row>
  );
};

export default Footer;
