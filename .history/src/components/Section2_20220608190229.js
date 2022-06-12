import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import  from "../img/bitcoinImage.jpg";

const Section2 = () => {
  const imageStyle = { border: "none", padding: "0", maxHeight: "300px" };

  return (
    <section id="tell-me-more">
      <Row className="g-0">
        <Col className="my-auto" md={{ span: 6, offset: 1 }}>
          <h2 className="special-font">Our Project</h2>
          <br />
          <p>
            The extinction call of Pangolins is a concern, Pango Inu is a
            project to help create more awareness to stop the poaching of
            Pangolins around the world.
          </p>
        </Col>
        <Col className="my-auto" md={5}>
          <Image src={Pangoin} style={imageStyle} thumbnail></Image>
        </Col>
      </Row>
    </section>
  );
};

export default Section2;
