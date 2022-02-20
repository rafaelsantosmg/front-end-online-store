import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

import './CardCart.css';

export default class CardCart extends Component {
  componentDidMount() {
    const { sumCart } = this.props;
    sumCart();
  }

  render() {
    const { cartProduct, increaseProductQuantity,
      decreaseProductQuantity, cartTotal } = this.props;
    return (
      <div>
        <div>
          { cartTotal !== 0 && (
            <p>
              {
                cartTotal.toLocaleString('pt-br',
                  { style: 'currency', currency: 'BRL' })
              }
            </p>
          ) }
        </div>
        { cartProduct.map((product) => (
          <Card
            className="style-custom-cardcart"
            key={ product.id }
          >
            <Card.Img variant="top" src={ product.thumbnail } alt={ product.title } />
            <Card.Body className="body-product-name">
              <Card.Title data-testid="shopping-cart-product-name">
                { product.title }
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                { (product.price * product.quantity).toLocaleString('pt-br',
                  { style: 'currency', currency: 'BRL' }) }
              </ListGroupItem>
              <ListGroupItem
                data-testid="shopping-cart-product-quantity"
              >
                Quantidade
                { ` ${product.quantity}` }
              </ListGroupItem>
            </ListGroup>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Button
                data-testid="product-increase-quantity"
                onClick={ () => increaseProductQuantity(product) }
                disabled={ product.buttonDisabled }
                variant="dark"
              >
                +
              </Button>
              <Button
                data-testid="product-decrease-quantity"
                disabled={ product.quantity === 0 }
                onClick={ () => decreaseProductQuantity(product) }
                variant="dark"
              >
                -
              </Button>
            </Card.Body>
          </Card>
        )) }
      </div>
    );
  }
}

CardCart.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
  increaseProductQuantity: PropTypes.func.isRequired,
  decreaseProductQuantity: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
  sumCart: PropTypes.func.isRequired,
};
