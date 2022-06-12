import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import dino from "../img/dino.jpg";

const Section2 = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };

  return (
    <section id="tell-me-more">
      <Row className="g-0">
        <Col className="my-auto" md={{ span: 6, offset: 1 }}>
          <h2 className="special-font">A bit more detail</h2>
          <br />
          <p>
            From its inception, Shiba Inu has done things differently. Starting
            with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
            Uniswap, then “burned” the other half to Ethereum co-founder Vitalik
            Buterin for safekeeping. To help reverse the devastating spread of
            Covid-19 in India, VB has since utilized SHIB in the largest crypto
            donation in history, and then actually burned 40% of its total
            supply to a dead wallet, ensuring our long-term success and
            stability. In the words of Ryoshi, “Thank you to the woofmeister for
            enabling true decentralization. Now we truly begin.”
          </p>
          <p>
            I used this next paragraph to mention all the social media we used.
            Like Twitter, Tiktok, and Discord. How can the people reach you? Is
            there anything else they should know before they ape in?
          </p>
        </Col>
        <Col className="my-auto" md={5}>
          <Image src={dino} style={imageStyle} thumbnail></Image>
        </Col>
      </Row>
    </section>
  );
};

export default Section2;
