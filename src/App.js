import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import ProductPage from './pages/Products';
import CartPage from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProductPage} exact />        
        <Route path="/cart" component={CartPage} exact />
      </Switch>      
    </BrowserRouter>
    
  )
}

export default App;
