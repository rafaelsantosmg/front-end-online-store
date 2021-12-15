import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProdutctCard from '../ProdutctCard';

import './Cards.css';

class Cards extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="cards-contaniner">
        {products.map((product) => (
          <ProdutctCard
            key={ product.id }
            title={ product.title }
            price={ product.price }
            thumbnail={ product.thumbnail }
            idProduct={ product.id }
          />
        ))}
      </div>

    );
  }
}

Cards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default Cards;
