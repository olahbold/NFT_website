import React from "react";
import { Image, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import dogeBrogan from "../img/doge-brogan.jpg";

const Section3 = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };

  return (
    <section id="charity">
      <Row className="g-0">
        <Col className="my-auto" md={5}>
          <Image src={dogeBrogan} style={imageStyle} thumbnail></Image>
        </Col>
        <Col className="my-auto" md={6}>
          <h2 className="special-font">SH</h2>
          <br />
          <p>
            The Shiba Inu token is our foundational currency that allows
            investors to hold millions, billions, or even trillions, of it in
            their wallets.
          </p>
          <p>
            Between its international recognition and its legitimate utility,
            SHIB is up thousands of times and is constantly expanding its reach.
            SHIB is the first to be listed and incentivized on ShibaSwap, our
            proprietary DEX.
          </p>

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
