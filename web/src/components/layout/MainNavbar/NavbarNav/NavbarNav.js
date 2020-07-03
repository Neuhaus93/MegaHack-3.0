import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import Coins from "./Coins";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Coins />
    <Notifications />
    <UserActions />
  </Nav>
);
