import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardCart from '../../components/CardCart';

class ShoppingCart extends Component {
  render() {
    const { cartProduct, increaseProductQuantity, decreaseProductQuantity,
      cartTotal, sumCart } = this.props;
    return (
      <Container>
        <h1>Carrinho de compras</h1>
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
        {cartProduct.length === 0 && (
          <div>
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
