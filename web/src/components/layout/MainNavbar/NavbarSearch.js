import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <IconContext.Provider value={{ size: "1.3em" }}>
            <div>
              <AiOutlineSearch />
            </div>
          </IconContext.Provider>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        className="navbar-search"
        placeholder="Procure por algum curso..."
      />
    </InputGroup>
  </Form>
);
