import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import { getProductsFromCategoryAndQuery } from './services/api';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  handleClick = async (category = '', query = '') => {
    const response = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Routes handleClick={ this.handleClick } products={ products } />
      </BrowserRouter>
    );
  }
}

export default App;
