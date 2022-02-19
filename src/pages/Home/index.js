import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'react-burger-menu/lib/menus/bubble';
import Container from 'react-bootstrap/Container';
import { getProductsFromHome } from '../../services/api';
import Cards from '../../components/Cards';
import Categories from '../../components/Categories';
import style from './styles';
import './Home.css';

const THIRTY = 30;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      productsHome: [],
    };
  }

  componentDidMount() {
    const { handleIsHome } = this.props;
    handleIsHome();
    getProductsFromHome()
      .then((data) => {
        const randon = this.getRandomInt(data.length);
        const max = randon > THIRTY ? THIRTY : randon;
        this.setState({ productsHome: data.slice(max, data.length) });
      });
  }

  componentWillUnmount() {
    const { handleIsHome } = this.props;
    handleIsHome();
  }

  getRandomInt = (max, min = 1) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
    const { handleClick, addProductCart, products } = this.props;
    const { menuOpen, productsHome } = this.state;
    return (
      <Container fluid style={ { padding: 0, margin: 0, backgroundColor: '#eee' } }>
        <Menu
          styles={ style }
          menuClassName="bmMenu2"
          isOpen={ menuOpen }
          onStateChange={ (state) => this.handleStateChange(state) }
        >
          <Categories handleClick={ handleClick } />
        </Menu>
        <Cards
          products={ products }
          productsHome={ productsHome }
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
  handleIsHome: PropTypes.func,
};

Home.defaultProps = {
  handleClick: () => {},
  addProductCart: () => {},
  handleIsHome: () => {},
};

export default Home;
