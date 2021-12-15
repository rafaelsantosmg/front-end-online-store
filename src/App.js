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

  filterProductWithQuantity = (cartProducts, filterProduct) => {
    const changeProductQuantity = cartProducts
      .find((product) => product.id === filterProduct.id);
    changeProductQuantity.quantity = 10;
    this.setState({
      cartProduct: [changeProductQuantity],
    });
  };

  addProductCart = (idProduct) => {
    const { products } = this.state;
    const findProduct = products.find((product) => product.id === idProduct);
    findProduct.quantity = 0;
    this.setState((prevState) => (
      {
        cartProduct: [...prevState.cartProduct,
          prevState.cartProduct.id === findProduct.id
            ?  : findProduct],
      }
    ), () => {
      // const { cartProduct } = this.state;
      // this.filterProductWithQuantity(cartProduct, findProduct);
    });
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
