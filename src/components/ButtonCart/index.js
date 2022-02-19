import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    const { cartQuantity } = this.props;
    return (
      <Link
        to="/cart"
        style={ { textDecoration: 'none' } }
      >
        {' '}
        <i className="fas fa-shopping-cart fa-2x" style={ { color: '#212529' } } />
        <span style={ { color: '#212529' } }>{ cartQuantity }</span>
      </Link>
    );
  }
}

ButtonCart.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};

export default ButtonCart;
