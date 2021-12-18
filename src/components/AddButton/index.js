import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AddButton extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cartProduct: [],
  //   };
  // }

  //   filterProductWithQuantity = (idProduct) => {
  //     const { products, cartProduct } = this.props;
  //     console.log(cartProduct);
  //     // const { cartProduct } = this.state;
  //     const findProduct = products.find((product) => product.id === idProduct);
  //     const index = cartProduct.indexOf(findProduct);
  //     if (cartProduct.includes(findProduct)) cartProduct[index].quantity += 1;
  //     else findProduct.quantity = 1;
  //     const productsFilter = [...cartProduct, findProduct];
  //     return productsFilter;
  //   };

  // addProductCart = (idProduct) => {
  //   let { cartProduct } = this.props;
  //   console.log(cartProduct);
  //   const products = this.filterProductWithQuantity(idProduct);
  //   cartProduct = [...cartProduct, products.reduce((acc, product) => {
  //     if (acc.includes(product)) return acc;
  //     return acc.concat(product);
  //   }, [])];
  //   // this.setState(() => ({
  //   //   cartProduct: products.reduce((acc, product) => {
  //   //     if (acc.includes(product)) return acc;
  //   //     return acc.concat(product);
  //   //   }, []),
  //   // }));
  // }

    addProductCart = (idProduct) => {
      const { products } = this.props;
      let { cartProduct } = this.props;
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
        // this.setState((prevState) => ({
        //   cartProduct: [...prevState.cartProduct,
        //     products.find((product) => product.id === idProduct)],
        // }
        // ));

        cartProduct = [...cartProduct,
          products.find((product) => product.id === idProduct)];
      }
    };

    render() {
      const { product } = this.props;
      return (
        <Button
          data-testid="shopping-cart-product-name"
          onClick={ () => this.addProductCart(product.id) }
        >
          Adicionar ao carrinho
        </Button>
      );
    }
}

export default AddButton;
