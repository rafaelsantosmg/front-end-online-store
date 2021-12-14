import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <i className="fas fa-box-open fa-9x" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
