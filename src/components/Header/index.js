import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/mercadolibre.svg';
import Search from '../Search';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <figure className="header-logo-container">
          <Link to="/">
            <img className="header-logo" src={ logoHeader } alt="Logo MLB" />
          </Link>
        </figure>
        <Search />
        <div className="cart" />
      </header>
    );
  }
}

export default Header;
