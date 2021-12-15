import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProdutctCard extends Component {
  render() {
    const { title, price, thumbnail, idProduct, addProductCart } = this.props;
    return (

      <Card data-testid="product" style={ { width: '18rem' } }>
        <Link
          to={ `/details/${idProduct} ` }
          data-testid="product-detail-link"
        >
          <Card.Img variant="top" src={ thumbnail } />
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              { price }
            </Card.Text>
          </Card.Body>
        </Link>
        <Button
          data-testid="product-add-to-cart"
          variant="primary"
          onClick={ () => addProductCart(idProduct) }
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
  idProduct: PropTypes.string,
};

ProdutctCard.defaultProps = {
  addProductCart: () => { },
  title: '',
  price: 0,
  thumbnail: '',
  idProduct: '',
};

export default ProdutctCard;
