import React from "react";
import PropTypes from "prop-types";
import { Progress } from "shards-react";

import UserProps from "../../../data/user-props";

const SidebarGame = ({ userProps }) => {
  const { performanceReportValue } = userProps;

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
        className="user-avatar img-thumbnail rounded-circle"
        src={require("../../../assets/images/badge.jpeg")}
        alt="User Avatar"
      />
      <p className="mt-2 mb-1">Nível 4</p>
      {/* <p className="mt-2 mb-1">{performanceReportValue * 10} / 1000</p> */}
      <Progress
        style={{ width: "70%" }}
        className="progress-lg my-0"
        value={performanceReportValue}
      >
        {performanceReportValue * 5} XP
      </Progress>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "70%" }}
      >
        <h6 className="my-0 text-muted" style={{ fontSize: 12 }}>
          500 XP
        </h6>
      </div>
      <div
        className="my-2"
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
