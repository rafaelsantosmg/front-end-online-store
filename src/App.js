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
      cartTotalPrice: 0,
      cartQuantity: 0,
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  sumCart = () => {
    const { cartProduct } = this.state;
    this.setState({
      cartTotalPrice: cartProduct
        .reduce((acc, product) => (acc + (product.quantity * product.price)), 0),
    });
  };

  saveLocalStorage = (cartProduct) => {
    localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    localStorage.setItem('cartQuantity', cartProduct
      .reduce((acc, product) => (acc + product.quantity), 0));
  };

  loadLocalStorage = () => {
    const { cartProduct, cartQuantity } = this.state;
    this.setState({
      cartProduct: JSON.parse(localStorage.getItem('cartProduct')) || cartProduct,
      cartQuantity: JSON.parse(localStorage.getItem('cartQuantity')) || cartQuantity,
    }, () => {
      this.sumCart();
    });
  };

  filterProductWithQuantity = (idProduct) => {
    const { products, cartProduct } = this.state;
    const findProduct = products.find((product) => product.id === idProduct);
    const index = cartProduct.indexOf(findProduct);
    findProduct.buttonDisabled = false;
    if (cartProduct.includes(findProduct)) cartProduct[index].quantity += 1;
    else findProduct.quantity = 1;
    const productsFilter = [...cartProduct, findProduct];
    return productsFilter;
  };

  addProductCart = (productAdd) => {
    const products = this.filterProductWithQuantity(productAdd.id);
    const findProduct = products.indexOf(productAdd);
    if (products[findProduct].quantity === productAdd.available_quantity) {
      products[findProduct].buttonDisabled = true;
    }
    this.setState(() => ({
      cartProduct: products.reduce((acc, product) => {
        if (acc.includes(product)) return acc;
        return acc.concat(product);
      }, []),
    }), () => {
      this.updateState();
    });
  };

  changeCartQuantity = (cartProduct) => {
    this.setState({
      cartQuantity: cartProduct
        .reduce((acc, product) => (acc + product.quantity), 0),
    });
  };

  // addProductCart = (product) => {
  //   const { cartProduct } = this.state;
  //   let sameProduct =total false;
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
  };

  updateState = () => {
    const { cartProduct } = this.state;
    this.sumCart();
    this.changeCartQuantity(cartProduct);
    this.saveLocalStorage(cartProduct);
  };

  increaseProductQuantity = (product) => {
    const { cartProduct } = this.state;
    const findProduct = cartProduct.indexOf(product);
    cartProduct[findProduct].quantity += 1;
    if (product.available_quantity === cartProduct[findProduct].quantity) {
      cartProduct[findProduct].buttonDisabled = true;
    }
    this.setState({
      cartProduct,
    }, () => {
      this.updateState();
    });
  };

  decreaseProductQuantity = (product) => {
    const { cartProduct } = this.state;
    const findProduct = cartProduct.indexOf(product);
    if (cartProduct[findProduct].quantity <= 0) cartProduct[findProduct].quantity = 0;
    else {
      cartProduct[findProduct].quantity -= 1;
      cartProduct[findProduct].buttonDisabled = false;
    }
    this.setState({
      cartProduct: cartProduct.filter((filterProduct) => filterProduct.quantity !== 0),
    }, () => {
      this.updateState();
    });
  };

  render() {
    const { products, cartProduct, productDetails,
      cartTotalPrice, cartQuantity } = this.state;
    return (
      <BrowserRouter>
        <Header
          handleClick={ this.handleClick }
          products={ products }
          cartQuantity={ cartQuantity }
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
          cartTotal={ cartTotalPrice }
          saveLocalStorage={ this.saveLocalStorage }
        />
      </BrowserRouter>
    );
  }
}

export default App;
