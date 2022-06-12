import React from "react";
import { Image, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import Coin2 from "../img/Coin2.jpg";

const Section3 = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };

  return (
    <section id="charity">
      <Row className="g-0">
        <Col className="my-auto" md={5}>
          <Image src={Coin2} style={imageStyle} thumbnail></Image>
        </Col>
        <Col className="my-auto" md={6}>
          <h2 className="special-font">SHIB</h2>
          <br />
          <p>
          The Pango Inu token is our foundational currency that will allow investors to hold millions or even billions of it in their wallet.

           
           
          </p>
         
         
         .
         
         
         

          <Container>
            <Navbar style={{ display: "block" }}>
              <Nav.Link href="/mint">
                <button className="buy-button">How To Buy</button>
              </Nav.Link>
            </Navbar>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default Section3;
