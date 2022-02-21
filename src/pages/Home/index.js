import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/bubble';
import Container from 'react-bootstrap/Container';
import Cards from '../../components/Cards';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import style from './styles';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  toggleMenu = () => {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    const { handleClick, addProductCart, products, cartQuantity, location } = this.props;
    const { menuOpen } = this.state;
    return (
      <Container fluid style={ { padding: 0, margin: 0, backgroundColor: '#eee' } }>
        <Header
          handleClick={ this.handleClick }
          products={ products }
          cartQuantity={ cartQuantity }
          location={ location }
        />
        <Menu
          styles={ style }
          menuClassName="bmMenu2"
          isOpen={ menuOpen }
          onStateChange={ (state) => this.handleStateChange(state) }
        >
          <Link
            to="/"
            style={ { textDecoration: 'none',
              textAlign: 'center',
              fontSize: '2rem',
              color: 'white',
              width: '100%' } }
          >
            Home
          </Link>
          <Categories handleClick={ handleClick } />
        </Menu>
        <Cards
          products={ products }
          addProductCart={ addProductCart }
        />
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
  cartQuantity: PropTypes.number.isRequired,
  location: PropTypes.objectOf(Object).isRequired,
};

Home.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
};

export default Home;
