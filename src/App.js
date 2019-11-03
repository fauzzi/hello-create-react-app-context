import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ProductPage from './pages/Products';
import CartPage from './pages/Cart';
import ShopContext from './context/shop-context';


const addProductToCart = product => {
  console.log('Adding product', product)
}

const removeProductFromCart = productId => {
  console.log('Removing product with id: ' + productId)
}

const App = () => {
  
  const [products] = useState(
    [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 },
      { id: 'p5', title: 'Harry Potter 30', price: 10.99 },
    ]);

   const [cart] = useState([
    { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity : 2 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99, quantity :3 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99, quantity : 4 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99, quantity : 1 }
   ])    

   

  return (
    <ShopContext.Provider value={{
      products,
      cart,
      addProductToCart,
      removeProductFromCart
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

export default App;
