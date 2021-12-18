import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default class CardCart extends Component {
  render() {
    const { products } = this.props;
    return (
      products.map((product) => (
        <Card style={ { width: '20rem' } } key={ product.id }>
          <Card.Img variant="top" src={ product.thumbnail } alt={ product.title } />
          <Card.Body>
            <Card.Title data-testid="shopping-cart-product-name">
              { product.title }

            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              { product.price.toLocaleString('pt-br',
                { style: 'currency', currency: 'BRL' }) }
            </ListGroupItem>
            <ListGroupItem>
              Quantidade
              { ` ${product.quantity}` }
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button>
              +
            </Button>
            <Button>
              -
            </Button>
          </Card.Body>
        </Card>
      ))
    );
  }
}

CardCart.propTypes = {
  products: propTypes.thumbnail.isRequired,
};
