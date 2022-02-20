import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'react-burger-menu/lib/menus/bubble';
import Container from 'react-bootstrap/Container';
import { getProductsFromCategoryAndQuery, getCategories } from '../../services/api';
import Cards from '../../components/Cards';
import Categories from '../../components/Categories';
import style from './styles';
import './Home.css';

const TWENT = 20;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      productsHome: [],
      categories: [],
    };
  }

  componentDidMount() {
    const { handleIsHome } = this.props;
    this.categories();
    handleIsHome();
  }

  componentDidUpdate(prevProp, prevState) {
    const { categories } = this.state;
    if (prevState.categories.length !== categories.length) {
      const randon = this.getRandomInt(0, categories.length);
      getProductsFromCategoryAndQuery(categories[randon].id, '')
        .then((data) => {
          this.setState({ productsHome: data.results.slice(0, TWENT) });
        });
    }
  }

  componentWillUnmount() {
    const { handleIsHome } = this.props;
    handleIsHome();
  }

  categories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
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
