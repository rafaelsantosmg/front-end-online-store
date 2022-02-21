import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import FormCheckout from '../../components/FormCheckout';

import './Checkout.css';

class Checkout extends Component {
  render() {
    const { products, cartQuantity, cartTotal, cartProduct } = this.props;
    return (
      <>
        <Header
          handleClick={ this.handleClick }
          products={ products }
          cartQuantity={ cartQuantity }
        />
        <Container>
          <FormCheckout
            cartProduct={ cartProduct }
            cartTotal={ cartTotal }
          />
        </Container>
      </>
    );
  }
}

Checkout.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  cartQuantity: PropTypes.number.isRequired,
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  cartTotal: PropTypes.number.isRequired,
};

export default Checkout;
