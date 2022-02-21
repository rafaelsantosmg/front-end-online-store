import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardDetail from '../../components/CardDetail';
import Header from '../../components/Header';
import AvaliableForm from '../../components/AvaliableForm/AvaliableForm';

import './ProductDetails.css';
import AvaliableComent from '../../components/AvaliableComent';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      userAvaliable: '',
      rating: 1,
      userComent: '',
      coments: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  componentWillUnmount() {
    const { changeButtonDisabled } = this.props;
    changeButtonDisabled();
  }

  getLocalStorage= () => {
    const getLocalStorageComents = JSON.parse(localStorage.getItem('coments')) || [];

    this.setState(() => ({
      coments: getLocalStorageComents,
    }));
  }

    onStarClick = (nextValue) => {
      this.setState({ rating: nextValue });
    }

    onChange = ({ target }) => {
      const { name } = target;
      this.setState({
        [name]: target.value,
      });
    }

    handleClickAvaliable = () => {
      const { rating, userAvaliable, userComent } = this.state;
      this.setState((prevState) => ({
        coments: [...prevState.coments, { userAvaliable, userComent, rating }],
        userAvaliable: '',
        userComent: '',
        rating: 1,
      }));
      const getComents = JSON.parse(localStorage.getItem('coments')) || [];
      localStorage.setItem('coments',
        JSON.stringify([...getComents, { userAvaliable, userComent, rating }]));
    }

    render() {
      const { addProductCart, getProduct, productDetails, isDisabled,
        products, cartQuantity, match: { params: { id } } } = this.props;
      const { rating, userAvaliable, userComent, coments } = this.state;
      return (
        <>
          <Header
            handleClick={ this.handleClick }
            products={ products }
            cartQuantity={ cartQuantity }
          />
          <Container fluid style={ { width: '80%', margin: '0 auto' } }>
            <Row>
              <Col>
                <h1 className="product-details-title">Details</h1>
                <CardDetail
                  addProductCart={ addProductCart }
                  productId={ id }
                  getProduct={ getProduct }
                  productDetails={ productDetails }
                  isDisabled={ isDisabled }
                />
              </Col>
            </Row>
            <Row className="product-detail-avaliable-content">
              <Col>
                <h1>Avaliações</h1>
                <AvaliableForm
                  onStarClick={ this.onStarClick }
                  rating={ rating }
                  userAvaliable={ userAvaliable }
                  userComent={ userComent }
                  onChange={ this.onChange }
                  handleClickAvaliable={ this.handleClickAvaliable }
                />
              </Col>
            </Row>
            {coments.length > 0 ? (
              <div className="product-detail-user-coment">
                <AvaliableComent
                  rating={ rating }
                  userAvaliable={ userAvaliable }
                  userComent={ userComent }
                  coments={ coments }
                />
              </div>) : null}
          </Container>
        </>
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
  isDisabled: PropTypes.bool.isRequired,
  changeButtonDisabled: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

ProductDetail.defaultProps = {
  addProductCart: () => { },
  getProduct: () => { },
};

export default ProductDetail;
