import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProdutctCard from '../ProdutctCard/ProdutctCard';

class Cards extends Component {
  render() {
    const { products } = this.props;
    return (
      products.map((product) => (
        <ProdutctCard
          key={ product.id }
          title={ product.title }
          price={ product.price }
          thumbnail={ product.thumbnail }
          idProduct={ product.id }
        />
      ))

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
