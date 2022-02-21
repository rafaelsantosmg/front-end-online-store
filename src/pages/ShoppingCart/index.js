import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import CardCart from '../../components/CardCart';

import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    const { cartProduct, increaseProductQuantity, decreaseProductQuantity,
      cartTotal, sumCart, products, cartQuantity } = this.props;
    return (
      <>
        <Header
          handleClick={ this.handleClick }
          products={ products }
          cartQuantity={ cartQuantity }
        />
        <Container fluid style={ { width: '80%' } }>
          <h1 style={ { margin: '20px 0', textAlign: 'center' } }>Carrinho de compras</h1>
          <hr />
          {cartProduct.length === 0 && (
            <div className="cart-empty">
              <i className="fas fa-box-open fa-9x" />
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            </div>)}
          <CardCart
            cartProduct={ cartProduct }
            increaseProductQuantity={ increaseProductQuantity }
            decreaseProductQuantity={ decreaseProductQuantity }
            cartTotal={ cartTotal }
            sumCart={ sumCart }
          />
          { cartProduct.length !== 0 && (
            <Link
              to="/checkout"
              data-testid="checkout-products"
              className="btn btn-dark"
              style={ {
                textDecoration: 'none',
                color: '#f5f5f5',
                fontSize: '1.3rem',
                fontWeight: '500',
                marginTop: '10px',
              } }
            >
              Finalizar compra

            </Link>) }
        </Container>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  increaseProductQuantity: PropTypes.func.isRequired,
  decreaseProductQuantity: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
  sumCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default ShoppingCart;
