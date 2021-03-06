import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import { getProductsFromCategoryAndQuery,
  getProductsFromItem,
  getCategories } from './services/api';
import './App.css';

const TWENT = 20;

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartProduct: [],
      productDetails: {},
      cartTotalPrice: 0,
      cartQuantity: 0,
      isDisabled: false,
      categories: [],
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
    this.categories();
  }

  componentDidUpdate(prevProps, prevState) {
    const { categories } = this.state;
    if (prevState.categories.length !== categories.length) {
      const randon = this.getRandomInt(0, categories.length);
      getProductsFromCategoryAndQuery(categories[randon].id, '')
        .then((data) => {
          this.setState({ products: data.results.slice(0, TWENT) });
        });
    }
  }

  categories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  getRandomInt = (max, min = 1) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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

  filterProductWithQuantity = (productAdd) => {
    const { products, cartProduct } = this.state;
    const findProduct = products.find((product) => product.id === productAdd.id);
    const index = cartProduct.indexOf(findProduct);
    findProduct.buttonDisabled = false;
    if (cartProduct.includes(findProduct)) cartProduct[index].quantity += 1;
    else findProduct.quantity = 1;
    if (findProduct.quantity === productAdd.available_quantity) {
      findProduct.buttonDisabled = true;
      this.setState({ isDisabled: true });
    }
    this.setState({ productDetails: findProduct });
    const productsFilter = [...cartProduct, findProduct];
    return productsFilter;
  };

  addProductCart = (productAdd) => {
    const products = this.filterProductWithQuantity(productAdd);
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

  changeButtonDisabled = () => {
    this.setState({ isDisabled: false });
  }

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
      cartTotalPrice, cartQuantity, isDisabled } = this.state;
    return (
      <BrowserRouter>
        <Routes
          handleClick={ this.handleClick }
          products={ products }
          cartQuantity={ cartQuantity }
          getProduct={ this.getProduct }
          addProductCart={ this.addProductCart }
          cartProduct={ cartProduct }
          productDetails={ productDetails }
          increaseProductQuantity={ this.increaseProductQuantity }
          decreaseProductQuantity={ this.decreaseProductQuantity }
          sumCart={ this.sumCart }
          cartTotal={ cartTotalPrice }
          saveLocalStorage={ this.saveLocalStorage }
          isDisabled={ isDisabled }
          changeButtonDisabled={ this.changeButtonDisabled }
        />
      </BrowserRouter>
    );
  }
}

export default App;
