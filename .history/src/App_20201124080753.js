import React, { Fragment } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './components/ProductDetail'
import { Switch, Route } from "react-router-dom";
import boo





function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/shoppingcart" component={ShoppingCart} exact />
        <Route path="/productdetail" component={ProductDetail} exact />
      </Switch>
    </>
  );
}

export default App;
