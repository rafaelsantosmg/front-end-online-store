import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoHeader from '../../images/mercadolibre.svg';
import Search from '../Search';
import Cart from '../ButtonCart';

import './styles.css';

function Header({ handleClick, cartQuantity, isHome }) {
  const { location } = useLocation();
  console.log(location);
  return (
    <header className="header">
      <figure className="header-logo-container">
        <Link to="/">
          { !isHome && <img className="header-logo" src={ logoHeader } alt="Logo MLB" /> }
        </Link>
      </figure>
      <Search
        handleClick={ handleClick }
      />
      <Cart cartQuantity={ cartQuantity } />
    </header>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func,
  cartQuantity: PropTypes.number.isRequired,
  isHome: PropTypes.bool,
};

Header.defaultProps = {
  handleClick: () => {},
  isHome: false,
};

export default Header;
