import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    // bg="dark" variant="dark"
    <div>
      <Row className="g-0">
        <Col  className="footer-nav">

            <Cmmu
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