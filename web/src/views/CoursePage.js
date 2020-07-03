import React from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione dolor neque quia reiciendis veniam temporibus non. Similique, sed cumque facilis ducimus repudiandae enim deserunt quam fugiat itaque voluptas deleniti aut nihil, distinctio vel adipisci eaque. Tempore sed, commodi animi minus assumenda sequi nulla nesciunt odit similique. Quaerat, odio similique?";

const CoursePage = () => {
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Trilhas"
          subtitle="Components"
          className="text-sm-left"
        />
      </Row>
      <Row>
        <Col lg="7" md="12" className="mb-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_cVOjFzRuc0"
            width="100%"
          />
        </Col>
        <Col lg="5" md="12" className="mb-3">
          <p style={{ fontSize: 14 }}>{lorem}</p>
          <p style={{ fontSize: 14 }}>{lorem}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePage;
