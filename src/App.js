import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ProductPage from './pages/Products';
import CartPage from './pages/Cart';
import ShopContext from './context/shop-context';

class App extends Component {

  state = {
    products : [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 },      
    ],
    cart: []
  }
  
  addProductToCart = (product) => {
    console.log('Adding product', product)    
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );
  
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
  
    setTimeout(()=> {
      this.setState({cart : updatedCart})   
    }, 700)  
  }


  removeProductFromCart = productId => {
    console.log('Removing product with id: ' + productId)
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );
  
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(()=> {
      this.setState({cart : updatedCart})
    }, 700)  
  }

  render() {
    const {products, cart} = this.state
    return (
      <ShopContext.Provider value={{
        products,
        cart,
        addProductToCart : this.addProductToCart,
        removeProductFromCart : this.removeProductFromCart
      }}>    
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductPage} exact />        
            <Route path="/cart" component={CartPage} exact />
          </Switch>      
        </BrowserRouter>
       </ShopContext.Provider>
      
    )
  }
}

export default App;