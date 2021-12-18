import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import { getProductsFromCategoryAndQuery, getProductsFromItem } from './services/api';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartProduct: [],
      productDetails: {},
      total: 0,
    };
  }

  sumCart = () => {
    const { cartProduct } = this.state;
    this.setState({
      total: cartProduct
        .reduce((acc, product) => (acc + (product.quantity * product.price)), 0),
    });
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

  addProductCart = (productAdd) => {
    const products = this.filterProductWithQuantity(productAdd.id);
    this.setState(() => ({
      cartProduct: products.reduce((acc, product) => {
        if (acc.includes(product)) return acc;
        return acc.concat(product);
      }, []),
    }));
  }

  // addProductCart = (product) => {
  //   const { cartProduct } = this.state;
  //   let sameProduct = false;
  //   cartProduct.forEach((prod) => {
  //     if (prod.id === product.id) {
  //       if (product.quantity) {
  //         product.quantity += 1;
  //       } else {
  //         product.quantity = 2;
  //       }
  //       sameProduct = true;
  //     }
  //   });
  //   if (!sameProduct) {
  //     this.setState((prevState) => ({
  //       cartProduct: [...prevState.cartProduct,
  //         product],
  //     }
  //     ));
  //   }
  // };

  handleClick = async (category = '', query = '') => {
    const response = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: response.results,
    });
  };

  getProduct = async (productId) => {
    const response = await getProductsFromItem(productId);
    this.setState({
      productDetails: response,
    });
  }

  increaseProductQuantity = (product) => {
    const { cartProduct } = this.state;
    const findProduct = cartProduct.indexOf(product);
    cartProduct[findProduct].quantity += 1;
    this.setState({
      cartProduct,
    }, () => {
      this.sumCart();
    });
  }

  decreaseProductQuantity = (product) => {
    const { cartProduct } = this.state;
    const findProduct = cartProduct.indexOf(product);
    if (cartProduct[findProduct].quantity <= 0) cartProduct[findProduct].quantity = 0;
    else cartProduct[findProduct].quantity -= 1;
    this.setState({
      cartProduct,
    }, () => {
      this.sumCart();
    });
  }

  render() {
    const { products, cartProduct, productDetails, total } = this.state;
    return (
      <BrowserRouter>
        <Header
          handleClick={ this.handleClick }
          products={ products }
        />
        <Routes
          handleClick={ this.handleClick }
          getProduct={ this.getProduct }
          addProductCart={ this.addProductCart }
          products={ products }
          cartProduct={ cartProduct }
          productDetails={ productDetails }
          increaseProductQuantity={ this.increaseProductQuantity }
          decreaseProductQuantity={ this.decreaseProductQuantity }
          sumCart={ this.sumCart }
          cartTotal={ total }
        />
      </BrowserRouter>
    );
  }
}

export default App;
