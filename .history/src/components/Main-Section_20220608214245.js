import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View,
  Text,
} from "@react-pdf/renderer";

import { Link } from "react-router-dom";

const MainSection = () => {
  const [loadpdf, setloadpdf] = useState(null);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <section id="main" style={{ backgroundColor: "chocolate" }}>
      <Row className="align-items-center, g-0">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Welcome To Pangoinu</h1>
          <div className="main-description">
            <h4>
              The Pango Inu token is totally decentralized from control by
              Banks, Companies, Institutions or Governments. The Pango Inu token
              is OF the Pangolins supporters, BY the pangolin supporters and FOR
              the Pangos
            </h4>
            <br />
          </div>
          <Container>
            <Navbar style={{ display: "flex" }}>
              <Nav.Link href="/howtobuy">
                <button className="mint-btn">How To Buy</button>
              </Nav.Link>
              <Nav.Link to="Whitepaper.pdf" target="_blank" download>
                {" "}
                <button className="mint-btn">Whitepaper</button>
              </Nav.Link>
            </Navbar>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default MainSection;
