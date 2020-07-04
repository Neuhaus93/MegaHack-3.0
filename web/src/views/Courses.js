import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ListCard from "../components/common/ListCard";
import ListCardItem from "../components/common/ListCardItem";
import BadgeInProgress from "../components/game/BadgeInProgress";

import courseList from "../data/popular-courses";

import badgesInProgress from "../data/badges-in-progress";
import { CourseListOne } from "../data/course-list";

const Courses = () => {
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

      {/* First Row of Posts */}
      <Row>
        {CourseListOne.map((post, idx) => (
          <Col xl="3" lg="4" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(${post.backgroundImage})` }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
              </div>
              <CardBody className="py-3">
                {/* <h6 className="card-title"> */}
                <a href={post.accessRoute} className="text-fiord-blue">
                  {post.title}
                </a>
                {/* </h6> */}
                {/* <p className="card-text d-inline-block mb-3">{post.body}</p> */}
                {/* <span className="text-muted">{post.date}</span> */}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg="4" md="6" sm="12">
          <ListCard
            listTitle="Cursos mais procurados"
            listTitleIcon={<i className="material-icons">star</i>}
            ListItem={ListCardItem}
            listArrayOfItems={courseList}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
