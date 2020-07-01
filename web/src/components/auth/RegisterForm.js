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

const RegisterForm = () => {
  return (
    <div>
      <ListGroup flush className="mx-4 mt-3">
        <ListGroupItem style={{ width: INPUT_WIDTH }}>
          <FormGroup>
            <label>
              <strong>Nome Completo</strong>
            </label>
            <FormInput placeholder="Nome" />
          </FormGroup>

          <FormGroup>
            <label>
              <strong>Email</strong>
            </label>
            <FormInput type="email" placeholder="exemplo@wilsonsons.com" />
          </FormGroup>

          <FormGroup>
            <label>
              <strong>CPF</strong>
            </label>
            <FormInput placeholder="000.000.000-00" />
          </FormGroup>

          <FormGroup style={{ marginBottom: 8 }}>
            <label>
              <strong>Senha</strong>
            </label>
            <FormInput type="password" placeholder="******" />
          </FormGroup>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Button size="lg" pill tag={Link} type="submit" to="/">
              REGISTRE
            </Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default RegisterForm;
