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
          backgroundColor: "orange",
          minHeight: "100vh",
          color: "rgb(239, 239, 239)",
        }}
      >
        <Col
          style={{ marginTop: "100px", marginBotton: "0px" }}
          md={{ span: 8, offset: 2 }}
        >
          <ol>
            <li>
              <span>
                <h3> Create a Metamask Wallet</h3>
              </span>{" "}
              Create a MetaMask Wallet using either a desktop computer or an
              iOS/Android mobile device. That will allow you to buy, sell, send,
              and receive Pango Inu.
            </li>
            <li>
              <span>
                <h3> Send BNB to your wallet</h3>
              </span>{" "}
              You can purchase BNB seamlessly through exchanges like Binance,
              MEXC, Gate.io etc and transfer BNB to your MetaMask Wallet. Make
              sure to use the BEP-20 network when transfering BNB.
            </li>

            <li>
              <span>
                <h3> Connect your wallet to Launchpad</h3>
              </span>{" "}
              Access your wallet to Launchpad by clicking ‘Connect to a wallet’
              and selecting MetaMask.
            </li>
            <li>
              <span>
                <h3> Swap BNB for Pango Inu</h3>
              </span>{" "}
              Access your wallet to Launchpad by clicking ‘Connect to a wallet’
              and selecting MetaMask.
            </li>
          </ol>
        </Col>
      </Row>
    </div>
  );
}

export default GetPP;
