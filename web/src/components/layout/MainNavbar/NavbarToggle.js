import React from "react";

import { Dispatcher, Constants } from "../../../flux";

const NavbarToggle = () => {
  function handleClick() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    });
  }

  return (
    <nav className="nav">
      <div
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none d-lg-none text-center"
      >
        <i className="material-icons">&#xE5D2;</i>
      </div>
    </nav>
  );
};

export default NavbarToggle;
