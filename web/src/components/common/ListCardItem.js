import React from "react";
import PropTypes from "prop-types";

const ListCardItem = ({ itemProps }) => {
  const { itemImg, itemTitle } = itemProps;
  return (
    <div className="d-flex p-2">
      {/* Avatar */}
      <div className="mr-3 ml-1">
        <img
          style={{
            width: "4.5rem",
            height: "3.5rem",
            borderRadius: "0.15rem",
          }}
          src={itemImg}
          alt={itemTitle}
        />
      </div>

      {/* Content */}
      <div className="d-flex align-items-center" style={{ width: "100%" }}>
        {/* Content :: Title */}
        <div className="text-mutes">
          <span className="text-secondary">{itemTitle}</span>
        </div>
      </div>
    </div>
  );
};

ListCardItem.propTypes = {
  itemProps: PropTypes.object,
};

ListCardItem.defaultProps = {
  itemProps: {
    itemImg: require("../../assets/images/badge_img.png"),
    itemTitle: "Majestade",
  },
};

export default ListCardItem;
