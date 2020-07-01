import React from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormInput,
  ListGroup,
  ListGroupItem,
  Button,
} from "shards-react";

import { INPUT_WIDTH } from "./Constants";

const LoginForm = () => {
  return (
    <ListGroup flush className="mx-4 mt-3">
      <ListGroupItem style={{ width: INPUT_WIDTH }}>
        <FormGroup>
          <label>
            <strong>Email</strong>
          </label>
          <FormInput type="email" placeholder="exemplo@wilsonsons.com" />
        </FormGroup>

        <FormGroup style={{ marginBottom: 8 }}>
          <label>
            <strong>Senha</strong>
          </label>
          <FormInput type="password" placeholder="******" />
        </FormGroup>
        <p style={{ display: "flex", justifyContent: "flex-end" }}>
          Esqueceu a senha?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="lg" pill tag={Link} type="submit" to="/">
            LOGIN
          </Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default LoginForm;
