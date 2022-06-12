import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import bitcoinImage from '../img/bitcoinImage.jpg';

const Section2 = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };

  return (
    <section id="tell-me-more">
      <Row className="g-0">
        <Col className="my-auto" md={{ span: 6, offset: 1 }}>
          <h2 className="special-font">Our Project & Ecosystem</h2>
          <br />
          <p>
            From its inception, Shiba Inu has done things differently. Starting
            with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
            Uniswap, then “burned” the other half to Ethereum co-founder Vitalik
            Buterin for safekeeping.
          </p>
         
         
         
         
         
         
         
         
        </Col>
        <Col className="my-auto" md={5}>
          <Image src={bitcoinImage} style={imageStyle} thumbnail></Image>
        </Col>
      </Row>
    </section>
  );
};

export default Section2;