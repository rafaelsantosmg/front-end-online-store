import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class CardDetail extends Component {
  componentDidMount() {
    const { productId, getProduct } = this.props;
    getProduct(productId);
  }

  render() {
    const { addProductCart, productDetails } = this.props;
    const priceBRL = productDetails.price;
    return (
      <Card style={ { width: '20rem' } }>
        <Card.Img variant="top" src={ productDetails.thumbnail } />
        <Card.Body>
          <Card.Title
            data-testid="product-detail-name"
          >
            { productDetails.title }

          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{ productDetails.id }</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>
            { `R$ ${priceBRL}` }
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            data-testid="product-detail-add-to-cart"
            onClick={ () => addProductCart(productDetails) }
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
  getProduct: PropTypes.func,
  productId: PropTypes.string,
  productDetails: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

CardDetail.defaultProps = {
  addProductCart: () => { },
  getProduct: () => { },
  productId: '',
};

export default CardDetail;
