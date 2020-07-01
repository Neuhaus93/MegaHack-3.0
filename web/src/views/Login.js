import React from "react";

import LoginForm from "../components/auth/LoginForm";
import AuthHeader from "../components/auth/AuthHeader";

const Auth = () => {
  return (
    <>
      <AuthHeader isLoginIn={true} />

      <LoginForm />
    </>
  );
};

export default Auth;
