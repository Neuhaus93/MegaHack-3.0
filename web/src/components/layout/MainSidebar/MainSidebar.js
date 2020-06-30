import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";

const MainSidebar = ({ hideLogoText }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    { menuVisible } && "open"
  );

  return (
    <Col tag="aside" className={classes} lg={{ size: 2 }} mg={{ size: 3 }}>
      <SidebarMainNavbar hideLogoText={hideLogoText} />
    </Col>
  );
};

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
};

MainSidebar.defaultProps = {
  hideLogoText: false,
};

export default MainSidebar;
