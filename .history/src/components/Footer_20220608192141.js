import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    // bg="dark" variant="dark"
    <Row className="g-0">
      <Col md={{ span: 10, offset: 1 }} className="footer-nav"></Col>
    </Row>
    
  );
};

export default Footer;
