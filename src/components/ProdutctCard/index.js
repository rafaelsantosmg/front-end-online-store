import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProdutctCard extends Component {
  constructor() {
    super();
    this.state = {
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.freeShippingProduct();
  }

  freeShippingProduct = () => {
    const { product: { shipping } } = this.props;
    this.setState(({
      freeShipping: shipping.free_shipping,
    }));
  }

  render() {
    const { product, addProductCart } = this.props;
    const { freeShipping } = this.state;

    return (

      <Card data-testid="product" style={ { width: '18rem' } }>
        <Link
          to={ {
            pathname: `/details/${product.id} `,
            product: { product },
          } }
          data-testid="product-detail-link"
        >
          <Card.Img variant="top" src={ product.thumbnail } />
          <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>
              { product.price.toLocaleString('pt-br',
                { style: 'currency', currency: 'BRL' }) }
            </Card.Text>
            <Card.Text>
              Quantidade no Carrinho
              {' '}
              { product.quantity }
            </Card.Text>
            <Card.Text>
              Estoque
              {' '}
              { product.available_quantity }
            </Card.Text>
            <Card.Text>
              {freeShipping && (
                <span
                  style={ { color: 'red', fontSize: '18px' } }
                  data-testid="free-shipping"
                >
                  Frete Grátis

                </span>)}
            </Card.Text>
          </Card.Body>
        </Link>
        <Button
          data-testid="product-add-to-cart"
          variant="primary"
          onClick={ () => addProductCart(product) }
          disabled={ product.quantity === product.available_quantity }
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
    buttonDisabled: PropTypes.bool,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

ProdutctCard.defaultProps = {
  addProductCart: () => { },
  title: '',
  price: 0,
  thumbnail: '',
};

export default ProdutctCard;
