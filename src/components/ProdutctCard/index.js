import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProdutctCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (

      <Card data-testid="product" style={ { width: '18rem' } }>
        <Card.Img variant="top" src={ thumbnail } />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

ProdutctCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  // idProduct: PropTypes.number,
};

ProdutctCard.defaultProps = {
  title: '',
  price: 0,
  thumbnail: '',
  // idProduct: 0,
};

export default ProdutctCard;
