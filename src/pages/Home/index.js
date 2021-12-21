import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../../components/Cards';
import Categories from '../../components/Categories';

class Home extends Component {
  render() {
    const { handleClick, addProductCart, products } = this.props;
    return (
      <Container fluid style={ { padding: 0 } }>
        <Row>
          <Col xs={ 6 } md={ 2 }>
            <Categories handleClick={ handleClick } />
          </Col>
          <Col xs={ 12 } md={ 10 }>
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.

            </p>
            <Cards
              products={ products }
              addProductCart={ addProductCart }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  handleClick: PropTypes.func,
  addProductCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

Home.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
};

export default Home;
