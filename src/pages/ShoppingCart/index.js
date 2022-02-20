import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardCart from '../../components/CardCart';

import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    const { cartProduct, increaseProductQuantity, decreaseProductQuantity,
      cartTotal, sumCart } = this.props;
    return (
      <Container>
        <h1 style={ { margin: '20px 0' } }>Carrinho de compras</h1>
        <Link
          to="/checkout"
          data-testid="checkout-products"
          style={ {
            textDecoration: 'none',
            color: 'rgb(33, 37, 41)',
            fontSize: '1.3rem',
            fontWeight: '500',
            marginTop: '10px',
          } }
        >
          Finalizar compra

        </Link>
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
      </Container>
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
};

export default ShoppingCart;
