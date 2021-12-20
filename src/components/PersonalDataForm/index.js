import React, { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

class PersonalDataForm extends Component {
  render() {
    return (
      <>
        <Row className="mb-3">
          <Form.Group as={ Col } controlId="formGridEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
            />
          </Form.Group>

          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="email"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridPassword">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={ Col } controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="CEP" data-testid="checkout-cep" />
          </Form.Group>

          <Form.Group as={ Col } controlId="formGridAddress2">
            <Form.Label>Endereço</Form.Label>
            <Form.Control placeholder="Endereço" data-testid="checkout-address" />
          </Form.Group>

        </Row>
        <Row className="mb-3">
          <Form.Group as={ Col } controlId="formGridCity">
            <Form.Label>Complemento</Form.Label>
            <Form.Control placeholder="Complemento" />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridCity">
            <Form.Label>Número</Form.Label>
            <Form.Control placeholder="Número" />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Cidade" />
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control placeholder="Estado" />
          </Form.Group>
        </Row>
      </>
    );
  }
}

export default PersonalDataForm;
