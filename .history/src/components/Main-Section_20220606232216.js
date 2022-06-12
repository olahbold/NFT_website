import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import background1 from "../img/background1.png";


const MainSection = () => {

    return (
        <section id="main" style={{backgroundImage: "url(" + background1 + ")"}}>
            <Row className="align-items-center, g-0">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Welcome To Pangoin</h1>
                    <div className="main-description">
                        <>
                        A Decentralized Meme Token that Evolved into a Vibrant Ecosystem
                        </p>
                        <br />
                    </div>
                    <Container>
                        <Navbar style={{display: "block"}}>
                        <Nav.Link href="/mint" ><button className="mint-btn" >MINT</button></Nav.Link>
                        </Navbar>
                    </Container>
                </Col>
            </Row>
        </section>
    )
}

export default MainSection
