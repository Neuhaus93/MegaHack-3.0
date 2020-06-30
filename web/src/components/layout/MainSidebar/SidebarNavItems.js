import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import getSidebarNavItems from "../../../data/sidebar-nav-items";

const SidebarNavItems = () => {
  const items = getSidebarNavItems();
  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
    </div>
  );
};

export default SidebarNavItems;
