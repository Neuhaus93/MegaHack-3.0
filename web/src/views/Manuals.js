import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Manuals = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Manuals"
          subtitle="Overview"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
    </Container>
  );
};

export default Manuals;
