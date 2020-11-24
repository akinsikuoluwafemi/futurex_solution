import React, { Fragment } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/Notfound';
import { Switch, Route } from "react-router-dom";
import { ProductDataContext} from '../'





function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/shoppingcart" component={ShoppingCart} exact />
        <Route path="/productdetail" component={ProductDetail} exact />
        <Route  component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
