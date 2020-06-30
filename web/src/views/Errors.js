import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Site em construção!</h3>
        <p>Não seja apressadinho(a), me dê mais tempo.</p>
        <Button pill>&larr; Vaze daqui</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
