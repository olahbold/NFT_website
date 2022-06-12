import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import bitcoinImage from "../img/bitcoinImage.jpg";
import Pangoin from "../img/Pangoin.png";

const Section4 = () => {
  const imageStyle = {
    border: "none",
    padding: "0",
    marginTop: "25px",
    maxHeight: "200px",
  };

  return (
    <section id="team">
      <Row className="g-0">
        <h2 className="special-font">Roadmap</h2>
        <Row className="g-0">
          <Col sm={6} md={3}>
            <p className="team-role special-font">Community Focused</p>
            <p className="team-blurb">
              Community Focused and fair launch. The dev team burned all of
              their tokens and participated with everyone else.
            </p>
          </Col>

          <Col sm={6} md={3}>
            <p className="team-role special-font">Automatic LP</p>
            <p className="team-blurb">
              Every trade contributes towards auto-generating liquidity that
              goes into multiple pools used by exchanges
            </p>
          </Col>
          <Col sm={6} md={3}>
            <p className="team-role special-font"></p>
            <p className="team-blurb">
              This person takes all the ingredients and mixes 'em up into a
              delicious NFT collection soup. They also write the smart contract
              to make sure your art lives forever.
            </p>
          </Col>
        </Row>
      </Row>
    </section>
  );
};

export default Section4;
