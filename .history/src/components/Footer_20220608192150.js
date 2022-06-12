import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    // bg="dark" variant="dark"
    
    <Row className="g-0">
      <Col md={{ span: 10, offset: 1 }} className="footer-nav"></Col>
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
  );
};

export default Footer;
