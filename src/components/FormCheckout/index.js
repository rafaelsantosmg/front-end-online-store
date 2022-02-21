import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form, Button } from 'react-bootstrap';
import PersonalDataForm from '../PersonalDataForm';
import PaymentDataForm from '../PaymentDataForm';

export default class FormCheckout extends Component {
  render() {
    const { cartTotal, cartProduct } = this.props;
    return (
      <>
        <Row>
          <h1>Revise seus Produtos</h1>
          <Col>
            {cartProduct.map((product) => (
              <div key={ product.id } className="checkout-container">
                <img src={ product.thumbnail } alt={ product.title } />
                <div>
                  <div data-testid="shopping-cart-product-name">
                    { product.title }
                    { (product.price * product.quantity).toLocaleString('pt-br',
                      { style: 'currency', currency: 'BRL' }) }
                    <p
                      data-testid="shopping-cart-product-quantity"
                    >
                      Quantidade
                      { ` ${product.quantity}` }
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <h5>
              Total:
              {' '}
              {cartTotal.toLocaleString('pt-br',
                { style: 'currency', currency: 'BRL' })}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Informações do comprador</h2>
            <Form>
              <PersonalDataForm />
              <PaymentDataForm />
              <Button>Comprar</Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

FormCheckout.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  cartTotal: PropTypes.number.isRequired,
};
