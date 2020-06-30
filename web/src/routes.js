import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Errors from "./views/Errors";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Errors,
  },
];
