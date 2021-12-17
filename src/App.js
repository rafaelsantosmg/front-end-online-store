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

  filterProductWithQuantity = (idProduct) => {
    const { products, cartProduct } = this.state;
    const findProduct = products.find((product) => product.id === idProduct);
    const index = cartProduct.indexOf(findProduct);
    if (cartProduct.includes(findProduct)) cartProduct[index].quantity += 1;
    else findProduct.quantity = 1;
    const productsFilter = [...cartProduct, findProduct];
    return productsFilter;
  };

  addProductCart = (idProduct) => {
    const products = this.filterProductWithQuantity(idProduct);
    this.setState(() => ({
      cartProduct: products.reduce((acc, product) => {
        if (acc.includes(product)) return acc;
        return acc.concat(product);
      }, []),
    }));
  }

  /*     addProductCart = (idProduct) => {
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
    }; */

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
