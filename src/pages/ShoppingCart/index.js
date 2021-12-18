import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardCart from '../../components/CardCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.filterProductWithQuantity();
  }

  filterProductWithQuantity = () => {
    const { cartProduct } = this.props;
    this.setState(() => ({
      products: cartProduct,
    }));
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>

        {products.length === 0 && (
          <div>
            <i className="fas fa-box-open fa-9x" />
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>)}
        <CardCart products={ products } />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
export default ShoppingCart;
