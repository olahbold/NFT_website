import React from 'react';
import { Navbar, Nav, Image, Container, NavDropdown } from 'react-bootstrap';
import Pangoin from '../img/Pangoin.pn';
import NavLinks from "./NavLinks";

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "",color : 'white'}} fixed="top" >
                <Container>
                <Navbar.Brand className="justify-content-center" href="/" >
                    <Image src={Pangoin} style={{height: "50px", textAlign: "center"}}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">          
                    </Nav>
                    <NavLinks />
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
