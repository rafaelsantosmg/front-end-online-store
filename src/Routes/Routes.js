import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetails';

class Routes extends Component {
  render() {
    const { handleClick, addProductCart, products, cartProduct,
      getProduct, productDetails,
      increaseProductQuantity, decreaseProductQuantity, cartTotal, sumCart } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            handleClick={ handleClick }
            addProductCart={ addProductCart }
            products={ products }
            { ...props }
          />) }
        />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart
            cartProduct={ cartProduct }
            increaseProductQuantity={ increaseProductQuantity }
            decreaseProductQuantity={ decreaseProductQuantity }
            cartTotal={ cartTotal }
            sumCart={ sumCart }
          />) }
        />
        <Route
          path="/details/:id"
          render={ (props) => (<ProductDetail
            getProduct={ getProduct }
            productDetails={ productDetails }
            addProductCart={ addProductCart }
            { ...props }
          />) }
        />
      </Switch>
    );
  }
}

Routes.propTypes = {
  handleClick: PropTypes.func,
  addProductCart: PropTypes.func,
  getProduct: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })),
  productDetails: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  increaseProductQuantity: PropTypes.func.isRequired,
  decreaseProductQuantity: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
  sumCart: PropTypes.func.isRequired,
};

Routes.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
  getProduct: () => {},
  cartProduct: [],
};

export default Routes;
