import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, AuthLayout } from "./layouts";

// Route Views
import Courses from "./views/Courses";
import UserProfile from "./views/UserProfile";
import EditProfile from "./views/EditProfile";
import Progress from "./views/Progress";
import Manuals from "./views/Manuals";
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
    path: "/edit-profile",
    layout: DefaultLayout,
    component: EditProfile,
  },
  {
    path: "/progress",
    layout: DefaultLayout,
    component: Progress,
  },
  {
    path: "/manuals",
    layout: DefaultLayout,
    component: Manuals,
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
  },
  {
    path: "/login",
    layout: AuthLayout,
    component: Login,
  },
  {
    path: "/register",
    layout: AuthLayout,
    component: Register,
  },
];
