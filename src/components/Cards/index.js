import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProdutctCard from '../ProdutctCard';

import './Cards.css';

class Cards extends Component {
  render() {
    const { products, addProductCart } = this.props;
    return (
      <div className="cards-contaniner">
        { products.map((product) => (
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
};

Cards.defaultProps = {
  addProductCart: () => { },
  products: [],
};

export default Cards;
