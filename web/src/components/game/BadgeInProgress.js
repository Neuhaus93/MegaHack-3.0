import React from "react";
import PropTypes from "prop-types";
import { Progress } from "shards-react";

const BadgeInProgress = ({ badgeProps }) => {
  const { badgeImg, badgeTitle, badgeDescription, badgeProgress } = badgeProps;
  return (
    <div className="d-flex p-2">
      {/* Avatar */}
      <div className="mr-2 ml-1">
        <img
          style={{
            width: "4.0rem",
            height: "4.8rem",
            borderRadius: "0.25rem",
          }}
          src={badgeImg}
          alt={badgeTitle}
        />
      </div>

      {/* Content */}
      <div style={{ width: "100%" }}>
        {/* Content :: Title */}
        <div className="text-mutes">
          <span className="text-secondary">{badgeTitle}</span>
        </div>

        {/* Content :: Body */}
        <p className="m-0 my-1 mb-2 text-muted">{badgeDescription}</p>

        {/* Badge :: Progress */}
        <Progress theme="warning" value={badgeProgress} />
      </div>
    </div>
  );
};

BadgeInProgress.propTypes = {
  badgeProps: PropTypes.object,
};

BadgeInProgress.defaultProps = {
  badgeProps: {
    badgeImg: require("../../assets/images/badge_img.png"),
    badgeTitle: "Majestade",
    badgeDescription: "Ganhe 18 coroas",
    badgeProgress: 60,
  },
};

export default BadgeInProgress;
