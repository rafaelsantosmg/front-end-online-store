import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';

class Routes extends Component {
  render() {
    const { handleClick, addProductCart, products, cartProduct,
      getProduct, productDetails,
      increaseProductQuantity, decreaseProductQuantity,
      cartTotal, sumCart, saveLocalStorage, isDisabled,
      changeButtonDisabled, cartQuantity } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            handleClick={ handleClick }
            addProductCart={ addProductCart }
            products={ products }
            cartQuantity={ cartQuantity }
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
            saveLocalStorage={ saveLocalStorage }
            products={ products }
            cartQuantity={ cartQuantity }
          />) }
        />
        <Route
          path="/details/:id"
          render={ (props) => (<ProductDetail
            getProduct={ getProduct }
            productDetails={ productDetails }
            addProductCart={ addProductCart }
            isDisabled={ isDisabled }
            changeButtonDisabled={ changeButtonDisabled }
            products={ products }
            cartQuantity={ cartQuantity }
            { ...props }
          />) }
        />
        <Route
          path="/checkout"
          render={ (props) => (<Checkout
            cartProduct={ cartProduct }
            sumCart={ sumCart }
            cartTotal={ cartTotal }
            products={ products }
            cartQuantity={ cartQuantity }
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
  saveLocalStorage: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeButtonDisabled: PropTypes.func.isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

Routes.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
  getProduct: () => {},
  cartProduct: [],
};

export default Routes;
