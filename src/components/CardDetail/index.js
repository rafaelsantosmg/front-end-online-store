import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getProductsFromItem } from '../../services/api';

class CardDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    this.getProduct(productId);
  }

  getProduct = async (productId) => {
    const response = await getProductsFromItem(productId);
    this.setState({
      product: response,
    });
  }

  render() {
    const { product } = this.state;

    return (
      <Card style={ { width: '20rem' } }>
        <Card.Img variant="top" src={ product.thumbnail } />
        <Card.Body>
          <Card.Title data-testid="product-detail-name">{product.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>
            R$
            {' '}
            {product.price}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>
    );
  }
}

CardDetail.propTypes = {
  productId: PropTypes.string,
};

CardDetail.defaultProps = {
  productId: '',
};

export default CardDetail;
