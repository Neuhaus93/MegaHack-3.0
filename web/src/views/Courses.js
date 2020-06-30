import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { CourseListOne } from "../data/course-list";

const Courses = () => {
  // backgroundImage: require("../assets/images/"),
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Blog Posts"
          subtitle="Components"
          className="text-sm-left"
        />
      </Row>

      {/* First Row of Posts */}
      <Row>
        {CourseListOne.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
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
                {/* <div className="card-post__author d-flex"> */}
                {/* <a
                    href="#"
                    className="card-post__author-avatar card-post__author-avatar--small"
                    style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                  >
                    Written by {post.author}
                  </a> */}
                {/* </div> */}
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    {post.title}
                  </a>
                </h5>
                <p className="card-text d-inline-block mb-3">{post.body}</p>
                {/* <span className="text-muted">{post.date}</span> */}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
