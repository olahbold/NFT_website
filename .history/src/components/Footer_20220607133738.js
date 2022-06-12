import React from "react";
import { Navbar, Nav, Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    // bg="dark" variant="dark"
    <Row className="g-0">
      <Col md={{ span: 10, offset: 1 }} className="footer-nav">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <LisGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>

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
