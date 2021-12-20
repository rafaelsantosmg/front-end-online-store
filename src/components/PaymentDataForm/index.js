import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class PaymentDataForm extends Component {
  render() {
    return (
      <>
        <div className="mb-3">

          <Form.Check
            inline
            label="Boleto"
            name="group1"
            type="radio"
            id="inline-radio-1"
          />
        </div>
        <div>
          <p>Cartão de credito</p>
          <Form.Check
            inline
            label="Visa"
            name="group1"
            type="radio"
            id="inline-radio-2"
          />
          <Form.Check
            inline
            label="MasterCard"
            name="group1"
            type="radio"
            id="inline-radio-3"
          />
          <Form.Check
            inline
            label="Elo"
            name="group1"
            type="radio"
            id="inline-radio-4"
          />
        </div>
      </>
    );
  }
}

export default PaymentDataForm;
