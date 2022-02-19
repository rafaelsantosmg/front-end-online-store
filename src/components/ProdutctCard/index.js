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

      <Card
        data-testid="product"
        style={ {
          width: '18rem',
          justifyContent: 'space-between',
          padding: '10px',
          alignItems: 'center' } }
        className="shadow bg-white rounded"
      >
        <Link
          to={ {
            pathname: `/details/${product.id} `,
            product: { product },
          } }
          data-testid="product-detail-link"
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
          } }
        >
          <Card.Img
            style={ { width: '150px' } }
            variant="top"
            src={ product.thumbnail }
          />
          <Card.Body>
            <Card.Title className="text-dark">{ product.title }</Card.Title>
            <Card.Text className="text-dark">
              { product.price.toLocaleString('pt-br',
                { style: 'currency', currency: 'BRL' }) }
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
          variant="dark"
          onClick={ () => addProductCart(product) }
          disabled={ product.buttonDisabled }
          style={ { width: '100%' } }
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
