import React from "react";
import PropTypes from "prop-types";
import { Progress } from "shards-react";

import UserProps from "../../../data/user-props";

const SidebarGame = ({ userProps }) => {
  const { performanceReportTitle, performanceReportValue } = userProps;

  return (
    <div
      className="mt-3"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: 65, height: 55, boxShadow: "0px 0px 7px 0px" }}
        className="user-avatar img-thumbnail"
        src={require("../../../assets/images/badge.jpeg")}
        alt="User Avatar"
      />
      <p className="mt-2 mb-1">{performanceReportValue * 10} / 1000</p>
      <Progress
        style={{ width: "75%" }}
        className="progress-md my-0"
        value={performanceReportValue}
      />
      <div
        className="my-3"
        style={{
          borderTop: "1.2px solid #93c1dd",
          boxShadow: "0px 0px 1px #93c1dd",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

SidebarGame.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  userProps: PropTypes.object,
};

SidebarGame.defaultProps = {
  userProps: UserProps,
};

export default SidebarGame;
