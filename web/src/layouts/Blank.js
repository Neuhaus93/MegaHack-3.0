import React from "react";
import { Container, Card } from "shards-react";

const BlankLayout = ({ children }) => (
  <Container fluid>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        flexFlow: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          id="main-logo"
          className="d-inline-block align-top mr-1 mb-4"
          style={{ maxWidth: "120px" }}
          src={require("../assets/images/logo.svg")}
          alt="Maritmo"
        />
        <h2 className="ml-3 pb-2">Maritmo</h2>
      </div>
      <Card
        style={{
          height: 550,
          width: 450,
        }}
      >
        {children}
      </Card>
    </div>
  </Container>
);

export default BlankLayout;
