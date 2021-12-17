import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetails';

class Routes extends Component {
  render() {
    const { handleClick, addProductCart, products, cartProduct,
      getProduct, productDetails } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            handleClick={ handleClick }
            addProductCart={ addProductCart }
            cartProduct={ cartProduct }
            products={ products }
            { ...props }
          />) }
        />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart cartProduct={ cartProduct } />) }
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
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })),
};

Routes.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
  cartProduct: [],
};

export default Routes;
