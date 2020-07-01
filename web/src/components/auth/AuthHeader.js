import React from "react";
import PropTypes from "prop-types";
import { CardHeader, Button } from "shards-react";
import { Link } from "react-router-dom";

import { BUTTON_WIDTH } from "./Constants";

const LoginButton = () => {
  return (
    <>
      <Button
        tag={Link}
        to="/register"
        outline
        squared
        style={{ width: BUTTON_WIDTH }}
      >
        <strong style={{ fontSize: 15 }}>REGISTRE</strong>
      </Button>
      <Button squared style={{ width: BUTTON_WIDTH }}>
        <strong style={{ fontSize: 15 }}>LOGIN</strong>
      </Button>
    </>
  );
};

const RegisterButton = () => {
  return (
    <>
      <Button squared style={{ width: BUTTON_WIDTH }}>
        <strong style={{ fontSize: 15 }}>REGISTRE</strong>
      </Button>
      <Button
        tag={Link}
        to="/login"
        outline
        squared
        style={{ width: BUTTON_WIDTH }}
      >
        <strong style={{ fontSize: 15 }}>LOGIN</strong>
      </Button>
    </>
  );
};

const AuthHeader = ({ isLoginIn }) => {
  return (
    <CardHeader className="border-bottom">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <p className="m-0" style={{ cursor: "pointer" }}>
          {isLoginIn ? <LoginButton /> : <RegisterButton />}
        </p>
      </div>
    </CardHeader>
  );
};

AuthHeader.propTypes = {
  /**
   * Whether to display the footer, or not.
   */
  isLoginIn: PropTypes.bool,
};

AuthHeader.defaultProps = {
  isLoginIn: true,
};

export default AuthHeader;
