import React, { useState } from "react";
import { mintToken } from "../Web3Client.js";
import background1 from "../img/background1.png";
import { Image, Row, Col } from "react-bootstrap";

function GetPP() {
  const imageStyle = { border: "none", padding: "30px", marginBottom: "none" };
  const btnStyle = { border: "none", padding: "0", marginBottom: "30px" };

  const [minted, setMinted] = useState(false);
  const [transaction, newTransaction] = useState();

  const mint = () => {
    mintToken()
      .then((tx) => {
        console.log("tx: ", tx);
        newTransaction(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log("PP Error: ", err);
      });
  };

  return (
    <div>
      <Row
        className="g-0"
        style={{
          backgroundcolor: "orange",
          minHeight: "100vh",
          color: "rgb(239, 239, 239)",
        }}
      >
        <Col
          style={{ marginTop: "100px", marginBotton: "0px" }}
          md={{ span: 8, offset: 2 }}
        >
          
        </Col>
      </Row>
    </div>
  );
}

export default GetPP;
