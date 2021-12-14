import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProdutctCard extends Component {
  render() {
    const { title, price, thumbnail, idProduct } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <p>{idProduct}</p>
      </div>
    );
  }
}

ProdutctCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  idProduct: PropTypes.number,
};

ProdutctCard.defaultProps = {
  title: '',
  price: 0,
  thumbnail: '',
  idProduct: 0,
};

export default ProdutctCard;
