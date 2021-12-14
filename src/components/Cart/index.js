import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class index extends Component {
  render() {
    return (
      <Link to="/cart">
        {' '}
        <i className="fas fa-shopping-cart fa-2x" data-testid="shopping-cart-button" />
      </Link>
    );
  }
}

export default index;
