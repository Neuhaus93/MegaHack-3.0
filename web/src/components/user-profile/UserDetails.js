import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from "shards-react";

import UserProps from "../../data/user-props";

const UserDetails = ({ userDetails, showEditButton }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={userDetails.avatar}
            alt={userDetails.name}
            width="110"
            style={{ boxShadow: "0px 0px 4px black" }}
          />
        </div>
        <h4 className="mb-0">{userDetails.name}</h4>
        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>

        {showEditButton ? (
          <Button
            tag={Link}
            to="/edit-profile"
            pill
            outline
            size="sm"
            className="mb-2"
          >
            <i className="material-icons mr-1">create</i> Editar Perfil
          </Button>
        ) : null}
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
  showEditButton: PropTypes.bool,
};

UserDetails.defaultProps = {
  userDetails: UserProps,
  showEditButton: true,
};

export default UserDetails;
