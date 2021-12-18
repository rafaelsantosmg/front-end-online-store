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
    const { increaseProductQuantity, decreaseProductQuantity,
      cartTotal, sumCart } = this.props;
    return (
      <div>
        <h1>Carrinho de compras</h1>

        {products.length === 0 && (
          <div>
            <i className="fas fa-box-open fa-9x" />
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>)}
        <CardCart
          products={ products }
          increaseProductQuantity={ increaseProductQuantity }
          decreaseProductQuantity={ decreaseProductQuantity }
          cartTotal={ cartTotal }
          sumCart={ sumCart }
        />
      </div>
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
