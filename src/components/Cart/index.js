import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class index extends Component {
  render() {
    return (
      <a href="/cart" data-testid="shopping-cart-button">
        {' '}
        <i className="fas fa-shopping-cart fa-2x" />
      </a>
    );
  }
}

export default index;
