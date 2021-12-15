import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProdutctCard from '../ProdutctCard';

import './Cards.css';

class Cards extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="cards-contaniner">
        {products.map((product) => (
          <Link
            key={ product.id }
            to={ `/details/${product.id} ` }
            data-testid="product-detail-link"
          >
            <ProdutctCard
              title={ product.title }
              price={ product.price }
              thumbnail={ product.thumbnail }
              idProduct={ product.id }
            />
          </Link>
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
