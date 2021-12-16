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
      cartProduct: [],
    };
  }

  addProductCart = (idProduct) => {
    const { products, cartProduct } = this.state;
    let sameProduct = false;
    cartProduct.forEach((product) => {
      if (product.id === idProduct) {
        if (product.quantity) {
          product.quantity += 1;
        } else {
          product.quantity = 2;
        }
        sameProduct = true;
      }
    });
    if (!sameProduct) {
      this.setState((prevState) => ({
        cartProduct: [...prevState.cartProduct,
          products.find((product) => product.id === idProduct)],
      }
      ));
    }
  };

  handleClick = async (category = '', query = '') => {
    const response = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: response.results,
    });
  };

  render() {
    const { products, cartProduct } = this.state;
    return (
      <BrowserRouter>
        <Header handleClick={ this.handleClick } products={ products } />
        <Routes
          handleClick={ this.handleClick }
          addProductCart={ this.addProductCart }
          products={ products }
          cartProduct={ cartProduct }
        />
      </BrowserRouter>
    );
  }
}

export default App;
