import React from "react";
import { Container, Card } from "shards-react";

const AuthLayout = ({ children }) => (
  <Container fluid>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "94vh",
        flexFlow: "column",
      }}
    >
      <img
        id="main-logo"
        className="d-inline-block align-top mr-1 mb-4"
        style={{ maxWidth: "285px" }}
        src={require("../assets/logos/logo_navy.png")}
        alt="Marítimo"
      />
      {/* <div
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
          alt="Marítimo"
        />
        <h2 className="ml-3 pb-2">Marítimo</h2>
      </div> */}
      <Card
        style={{
          height: 530,
          width: 440,
        }}
      >
        {children}
      </Card>
    </div>
  </Container>
);

export default AuthLayout;
