import React, { Component } from 'react';

class ShoppingCart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //     quantity: 0,
  //   };
  // }

  // componentDidMount() {
  //   this.filterProductWithQuantity();
  // }

  // filterProductWithQuantity = () => {
  //   const { cartProduct } = this.props;
  //   const filterProduct = cartProduct.reduce((acc, product) => {
  //     console.log(acc, product);
  //     if (acc.id === product.id) {
  //       console.log('achou');
  //       this.setState((prevState) => ({
  //         quantity: prevState.quantity + 1,
  //       }));
  //     }
  //     return product;
  //   });
  // };

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
