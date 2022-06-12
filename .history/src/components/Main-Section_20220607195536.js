import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";


const MainSection = () => {
  return (
    <section id="main" style={{ backgroundColor: "chocolate" }}>
      <Row className="align-items-center, g-0">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Welcome To Pangoinu</h1>
          <div className="main-description">
            <h3>
              
            </h3>
            <br />
          </div>
          <Container>
            <Navbar style={{ display: "block" }}>
              <Nav.Link href="/mint">
                <button className="mint-btn">How To Buy</button>
              </Nav.Link>
            </Navbar>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default MainSection;
