import React from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col, Button } from "shards-react";

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
          title="Rebocadores"
          subtitle="Trilhas"
          className="text-sm-left"
          displaySubtitle={true}
        />
      </Row>
      <Row>
        <Col
          lg="7"
          md="12"
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_cVOjFzRuc0"
            width="100%"
          />
          <p className="mt-1">Obrigatório - 20xp | 3 moedas</p>
        </Col>
        <Col lg="5" md="12" className="mb-3">
          <h4>Sobre o curso</h4>
          <p style={{ fontSize: 14 }}>{lorem}</p>
          <p style={{ fontSize: 14 }}>{lorem}</p>
        </Col>
      </Row>
      <Row
        noGutters
        className="d-flex align-items-center mb-4 py-2 border rounded border-dark"
        style={{ boxShadow: "0px 0px 4px 0px black" }}
      >
        <Col
          xl="7"
          lg="6"
          md="12"
          sm="12"
          className="d-flex justify-content-center mb-lg-0 mb-md-2 mb-sm-2"
        >
          <h4 className="my-0 font-weight-bold">Curso rebocar - SD456</h4>
        </Col>
        <Col
          xl="5"
          lg="6"
          md="12"
          sm="12"
          className="d-flex justify-content-center"
        >
          <Button theme="secondary" className="mr-2 p-2">
            <h6
              className="font-weight-bold"
              style={{ fontSize: 13, color: "white", margin: 0 }}
            >
              Acessar material do curso
            </h6>
          </Button>
          <Button theme="secondary" className="p-2">
            <h6
              className="font-weight-bold"
              style={{ fontSize: 13, color: "white", margin: 0 }}
            >
              Baixar material do curso
            </h6>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePage;
