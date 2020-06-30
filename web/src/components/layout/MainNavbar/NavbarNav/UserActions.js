import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from "shards-react";

const UserActions = () => {
  const [visible, setVisible] = useState(false);

  function toggleUserActions() {
    setVisible(!visible);
  }

  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={require("../../../../assets/images/avatar.png")}
          alt="User Avatar"
        />{" "}
        <span className="d-none d-md-inline-block">Lucas Neuhaus</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible}>
        <DropdownItem tag={Link} to="user-profile">
          <i className="material-icons">&#xE7FD;</i> Perfil
        </DropdownItem>
        <DropdownItem tag={Link} to="edit-user-profile">
          <i className="material-icons">&#xE8B8;</i> Editar Perfil
        </DropdownItem>
        <DropdownItem tag={Link} to="file-manager-list">
          <i className="material-icons">&#xE2C7;</i> Arquivos Offline
        </DropdownItem>
        {/* <DropdownItem tag={Link} to="transaction-history">
          <i className="material-icons">&#xE896;</i> Transactions
        </DropdownItem> */}
        <DropdownItem divider />
        <DropdownItem tag={Link} to="/" className="text-danger">
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
};

export default UserActions;
