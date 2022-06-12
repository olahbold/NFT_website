import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
} from "react-bootstrap";
import NavLinks from "./NavLinks";
import bitcoinImage from '../img/bitcoinImage.jpg';
const Footer = () => {
  return (
    // bg="dark" variant="dark"
    <Row className="g-0">
      <Col md={{ span: 10, offset: 1 }} className="footer-nav">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>

        <Col className="my-auto" md={{ span: 6, offset: 1 }}>
          <h2 className="special-font">Our Project & Ecosystem</h2>
          <br />
          <p>
            From its inception, Shiba Inu has done things differently. Starting
            with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
            Uniswap, then “burned” the other half to Ethereum co-founder Vitalik
            Buterin for safekeeping.
          </p>
          <p>
            To help reverse the devastating spread of Covid-19 in India, VB has
            since utilized SHIB in the largest crypto donation in history, and
            then actually burned 40% of its total supply to a dead wallet,
            ensuring our long-term success and stability. In the words of
            Ryoshi, “Thank you to the woofmeister for enabling true
            decentralization. Now we truly begin.”
          </p>
        </Col>
        <Col className="my-auto" md={5}>
          <Image src={bitcoinImage} style={imageStyle} thumbnail></Image>
        </Col>

        <p className="footer-copyright">
          Website by &copy;
          <a href="" className="footer-link">
            {" "}
            Pangoin Team
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
