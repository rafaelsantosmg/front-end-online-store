import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoHeader from '../../images/mercadolibre.svg';
import Search from '../Search';
import Cart from '../ButtonCart';

import './styles.css';

class Header extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <header className="header">
        <figure className="header-logo-container">
          <Link to="/">
            <img className="header-logo" src={ logoHeader } alt="Logo MLB" />
          </Link>
        </figure>
        <Search
          handleClick={ handleClick }
        />
        <Cart />
      </header>
    );
  }
}

Header.propTypes = {
  handleClick: PropTypes.func,
};

Header.defaultProps = {
  handleClick: () => {},
};

export default Header;
