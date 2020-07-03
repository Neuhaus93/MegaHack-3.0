import React from "react";

import LoginForm from "../components/auth/LoginForm";
import AuthHeader from "../components/auth/AuthHeader";

const Auth = () => {
  return (
    <>
      <AuthHeader isLoginIn={true} />

      <div className="mt-10">
        <LoginForm />
      </div>
    </>
  );
};

export default Auth;
