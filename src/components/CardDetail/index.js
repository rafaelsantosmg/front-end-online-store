import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import './CardDetail.css';

class CardDetail extends Component {
  componentDidMount() {
    const { productId, getProduct } = this.props;
    getProduct(productId);
  }

  render() {
    const { addProductCart, productDetails, isDisabled } = this.props;
    const priceBRL = productDetails.price;
    return (
      <Card className="style-custom">
        <Card.Img
          variant="top"
          src={ productDetails.thumbnail }
        />
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
        <Card.Footer style={ { display: 'flex', alignItems: 'center' } }>
          <Button
            data-testid="product-detail-add-to-cart"
            onClick={ () => addProductCart(productDetails) }
            disabled={ isDisabled }
            style={ { height: '55px' } }
            variant="dark"
          >
            Adicionar ao carrinho
          </Button>
        </Card.Footer>
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
    buttonDisabled: PropTypes.bool,
  }).isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

CardDetail.defaultProps = {
  addProductCart: () => { },
  getProduct: () => { },
  productId: '',
};

export default CardDetail;
