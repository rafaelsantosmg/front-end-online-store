import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/bubble';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Cards from '../../components/Cards';
import Categories from '../../components/Categories';
import style from './styles';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  componentDidMount() {
    const { handleIsHome } = this.props;
    handleIsHome();
  }

  componentWillUnmount() {
    const { handleIsHome } = this.props;
    handleIsHome();
  }

  // Isso mantém seu estado em sincronia com a abertura/fechamento do menu
  // pelos meios padrão, por exemplo, clicando no X, pressionando a tecla ESC etc.
  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  }

  // Isso pode ser usado para fechar o menu, por exemplo, quando um usuário clica em um item de menu
  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  // Isso pode ser usado para alternar o menu, por exemplo, ao usar um ícone personalizado
  // Dica: Você provavelmente deseja ocultar um/ambos os ícones padrão se estiver usando um ícone personalizado
  // Consulte https://github.com/negomi/react -burger-menu#custom-icons
  toggleMenu = () => {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    const { handleClick, addProductCart, products } = this.props;
    const { menuOpen } = this.state;
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
