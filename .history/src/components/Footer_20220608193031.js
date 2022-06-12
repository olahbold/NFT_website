import React from "react";
import { Navbar, Nav, Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    // bg="dark" variant="dark"
    <div>
      <Row className="g-0">
        <Col className="footer-nav" md = >
          <h3>Community</h3>
          <p>Community</p>
        </Col>

        <Col className="footer-nav">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup >
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        {" "}
        <p className="footer-copyright">
          Website by &copy;
          <a href="" className="footer-link">
            {" "}
            Pangoin Team
          </a>
        </p>{" "}
      </Row>
    </div>
  );
};

export default Footer;
