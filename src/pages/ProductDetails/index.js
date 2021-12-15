import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardDetail from '../../components/CardDetail';

class ProductDetail extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Details</h1>
            <CardDetail productId={ id } />
          </Col>
        </Row>
      </Container>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
