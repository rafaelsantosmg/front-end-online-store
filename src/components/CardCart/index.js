import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

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
          <Card style={ { width: '20rem' } } key={ product.id }>
            <Card.Body>
              <Card.Title data-testid="shopping-cart-product-name">
                { product.title }
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={ product.thumbnail } alt={ product.title } />
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
            <Card.Body>
              <Button
                data-testid="product-increase-quantity"
                onClick={ () => increaseProductQuantity(product) }
              >
                +
              </Button>
              <Button
                data-testid="product-decrease-quantity"
                disabled={ product.quantity === 0 }
                onClick={ () => decreaseProductQuantity(product) }
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
