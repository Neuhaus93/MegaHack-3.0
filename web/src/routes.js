import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Courses from "./views/Courses";
import UserProfile from "./views/UserProfile";
import Errors from "./views/Errors";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/errors" />,
  },
  {
    path: "/courses",
    layout: DefaultLayout,
    component: Courses,
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile,
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
  },
];
