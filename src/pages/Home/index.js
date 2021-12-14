import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/Cards/Cards';
import Categories from '../../components/Categories';

class Home extends Component {
  render() {
    const { handleClick, products } = this.props;
    return (
      <div className="home-page">
        <Categories handleClick={ handleClick } />
        <div>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </p>
          <Cards products={ products } />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleClick: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

Home.defaultProps = {
  handleClick: () => {},
};
export default Home;
