import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProdutctCard extends Component {
  render() {
    const { product, addProductCart } = this.props;
    return (

      <Card data-testid="product" style={ { width: '18rem' } }>
        <Link
          to={ {
            pathname: `/details/${product.id} `,
            product: { product } } }
          data-testid="product-detail-link"
        >
          <Card.Img variant="top" src={ product.thumbnail } />
          <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>
              { product.price }
            </Card.Text>
          </Card.Body>
        </Link>
        <Button
          data-testid="product-add-to-cart"
          variant="primary"
          onClick={ () => addProductCart(product) }
        >
          Adicionar ao Carrinho
        </Button>
      </Card>
    );
  }
}

ProdutctCard.propTypes = {
  addProductCart: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

ProdutctCard.defaultProps = {
  addProductCart: () => { },
  title: '',
  price: 0,
  thumbnail: '',
};

export default ProdutctCard;
