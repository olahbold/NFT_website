import React from "react";
import { Nav } from "react-bootstrap";
import { FaTelegram } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImReddit } from "react-icons/im";

const NavLinks = () => {
  const navLinkStyle = { fontWeight: "bold", color: "black", fontSize: "18px" };
  return (
    <>
      <Nav>
        <Nav.Link href="/#tell-me-more" style={navLinkStyle}>
          Home
        </Nav.Link>
        <Nav.Link href="/#tell-me-more" style={navLinkStyle}>
          About
        </Nav.Link>
        <Nav.Link href="/#charity" style={navLinkStyle}>
          Roadmap
        </Nav.Link>
        <Nav.Link href="/#team" style={navLinkStyle}>
          Earn
        </Nav.Link>
        <Nav.Link href="/mint" style={navLinkStyle}>
          How To Buy
        </Nav.Link>
        <Nav.Link href="" style={navLinkStyle}>
          PangoSwap
        </Nav.Link>
        <Nav.Link href="/#tell-me-more" style={navLinkStyle}>
          Community
        </Nav.Link>
      </Nav>
      <Nav style={{ marginLeft: "40px" }}>
        <Nav.Link href="https://t.me/PangoInuToken">
          {" "}
          <FaTelegram />{" "}
        </Nav.Link>

        <Nav.Link href='https://twitter.com/Pangoinutoken?s=20&t=KaGbXeYkjLBqmjFq0EHo4Q/'>
          <BsTwitter />
        </Nav.Link>
      </Nav>
    </>
  );
};

export default NavLinks;
