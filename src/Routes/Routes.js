import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetails';

class Routes extends Component {
  render() {
    const { handleClick, products } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            handleClick={ handleClick }
            products={ products }
            { ...props }
          />) }
        />
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/details/:id" component={ ProductDetail } />
      </Switch>
    );
  }
}

Routes.propTypes = {
  handleClick: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

Routes.defaultProps = {
  handleClick: () => {},
};
export default Routes;
