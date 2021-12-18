import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardDetail from '../../components/CardDetail';

class ProductDetail extends Component {
  render() {
    const { addProductCart, getProduct, productDetails,
      match: { params: { id } } } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Details</h1>
            <CardDetail
              addProductCart={ addProductCart }
              productId={ id }
              getProduct={ getProduct }
              productDetails={ productDetails }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

ProductDetail.propTypes = {
  addProductCart: PropTypes.func,
  getProduct: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  productDetails: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

ProductDetail.defaultProps = {
  addProductCart: () => { },
  getProduct: () => { },
};

export default ProductDetail;
