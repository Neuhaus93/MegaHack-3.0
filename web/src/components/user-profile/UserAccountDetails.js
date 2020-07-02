import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Primeiro Nome</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Lucas"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Último Nome</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Neuhaus"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              {/* Email / Profissão */}
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="lucas.neuhaus@wilsonsons.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="feInputOccupation">Ocupação</label>
                  <FormSelect id="feInputOccupation">
                    <option>Escolha...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
              </Row>

              {/* Atualizar Senha */}
              <Row form>
                <Col md="6" className="form-group">
                  <label>Nova Senha</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label>Repetir Nova Senha</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>

              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">Cidade</label>
                  <FormInput
                    id="feCity"
                    placeholder="Cidade"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="6" className="form-group">
                  <label htmlFor="feInputState">Estado</label>
                  <FormSelect id="feInputState">
                    <option>Escolha...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
              </Row>

              <Button theme="accent">Atualizar Perfil</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Detalhes da Conta",
};

export default UserAccountDetails;
