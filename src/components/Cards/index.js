import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProdutctCard from '../ProdutctCard';

import './Cards.css';

class Cards extends Component {
  render() {
    const { products, addProductCart, productsHome } = this.props;
    const renderProducts = products.length > 0 ? products : productsHome;
    return (
      <div className="cards-contaniner">
        { renderProducts.map((product) => (
          <ProdutctCard
            key={ product.id }
            addProductCart={ addProductCart }
            product={ product }
          />
        )) }
      </div>

    );
  }
}

Cards.propTypes = {
  addProductCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })),
  productsHome: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })),
};

Cards.defaultProps = {
  addProductCart: () => { },
  products: [],
  productsHome: [],
};

export default Cards;
