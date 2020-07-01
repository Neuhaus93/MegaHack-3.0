import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from "shards-react";

const UserDetails = ({ userDetails }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={userDetails.avatar}
            alt={userDetails.name}
            width="110"
          />
        </div>
        <h4 className="mb-0">{userDetails.name}</h4>
        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
        <Button pill outline size="sm" className="mb-2">
          <i className="material-icons mr-1">create</i> Editar Perfil
        </Button>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <strong className="text-muted d-block mb-2">
              {userDetails.performanceReportTitle}
            </strong>
            <Progress
              className="progress-sm"
              value={userDetails.performanceReportValue}
            >
              <span className="progress-value">
                {userDetails.performanceReportValue * 10} / 1000
              </span>
            </Progress>
          </div>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Lucas Neuhaus",
    // avatar: require("./../../images/avatar.png"),
    avatar: require("../../assets/images/avatar.png"),
    jobTitle: "CEO da porra toda",
    performanceReportTitle: "Capitão",
    performanceReportValue: 37,
    metaTitle: "Sobre mim",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
  },
};

export default UserDetails;
