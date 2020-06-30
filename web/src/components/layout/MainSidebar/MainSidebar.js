import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({ hideLogoText }) => {
  // const [menuVisible, setMenuVisible] = useState(false);
  let menuVisible = false;

  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    { menuVisible } && "open"
  );

  return (
    <Col tag="aside" className={classes} lg={{ size: 2 }} mg={{ size: 3 }}>
      <SidebarMainNavbar hideLogoText={hideLogoText} />
      <SidebarSearch />
      <SidebarNavItems />
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
