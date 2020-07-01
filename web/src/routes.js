import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, BlankLayout } from "./layouts";

// Route Views
import Courses from "./views/Courses";
import UserProfile from "./views/UserProfile";
import Errors from "./views/Errors";
import Login from "./views/Login";
import Register from "./views/Register";

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
  {
    path: "/login",
    layout: BlankLayout,
    component: Login,
  },
  {
    path: "/register",
    layout: BlankLayout,
    component: Register,
  },
];
