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
            <p className="team-role special-font">Artist</p>
            <p className="team-blurb">
              An artist with 1 Million years of experience from cave drawings to
              glass blowing to digital monke.
            </p>
          </Col>

          <Col sm={6} md={3}>
            <p className="team-role special-font">Another artist?</p>
            <p className="team-blurb">
              Do you really need two artists? Maybe? I guess this artist is the
              one who sculpts your NFTs from marble before you upload that chunk
              of rock to the blockchain.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <p className="team-role special-font">Programmer</p>
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
