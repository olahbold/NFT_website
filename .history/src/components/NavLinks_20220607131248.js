import React from "react";
import { Image, Nav } from "react-bootstrap";
import twitter from "../img/social-twitter-white.png";
import tiktok from "../img/social-tiktok-white.png";
import { FaDiscord } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImReddit } from "react-icons/im";

const NavLinks = () => {
  const navLinkStyle = { fontWeight: "bold", color: "black", fontSize: "18px" };
  return (
    <>
      <Nav>
        <Nav.Link href="/#tell-me-more" style={navLinkStyle}>
          Ecosystem
        </Nav.Link>
        <Nav.Link href="/#charity" style={navLinkStyle}>
          Pangoin
        </Nav.Link>
        <Nav.Link href="/#team" style={navLinkStyle}>
          The Team
        </Nav.Link>
        <Nav.Link href="/gallery" style={navLinkStyle}>
          Gallery
        </Nav.Link>
        <Nav.Link href="/mint" style={navLinkStyle}>
          How To Buy
        </Nav.Link>
      </Nav>
      <Nav style={{ marginLeft: "40px" }}>
        <Nav.Link href="https://twitter.com/">
          {" "}
          <FaDiscord />{" "}
        </Nav.Link>
        <Nav.Link href="https://twitter.com/">
          {" "}
          <BsInstagram />{" "}
        </Nav.Link>
        <Nav.Link href="https://twitter.com/">
          {" "}
          <ImReddit />{" "}
        </Nav.Link>
        <Nav.Link href="https://www.tiktok.com/">
          <BsTwitter />
        </Nav.Link>
      </Nav>
    </>
  );
};

export default NavLinks;
