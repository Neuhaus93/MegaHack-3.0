import React from "react";

import RegisterForm from "../components/auth/RegisterForm";
import AuthHeader from "../components/auth/AuthHeader";

const Register = () => {
  return (
    <>
      <AuthHeader isLoginIn={false} />

      <RegisterForm />
    </>
  );
};

export default Register;
