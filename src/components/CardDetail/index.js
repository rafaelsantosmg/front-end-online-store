import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class CardDetail extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     product: {},
  //   };
  // }

  componentDidMount() {
    const { productId, getProduct } = this.props;
    getProduct(productId);
  }

  render() {
    const { addProductCart, productId, productDetails } = this.props;
    return (
      <Card style={ { width: '20rem' } }>
        <Card.Img variant="top" src={ productDetails.thumbnail } />
        <Card.Body>
          <Card.Title data-testid="product-detail-name">{productDetails.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>
            R$
            {' '}
            {productDetails.price}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            data-testid="shopping-cart-product-name"
            onClick={ () => addProductCart(productId) }
          >
            Adicionar ao carrinho
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

CardDetail.propTypes = {
  addProductCart: PropTypes.func,
  productId: PropTypes.string,
};

CardDetail.defaultProps = {
  addProductCart: () => { },
  productId: '',
};

export default CardDetail;
