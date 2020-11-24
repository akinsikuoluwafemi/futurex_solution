import React, { Fragment } from "react";
import logo from './images/logo.webp';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './components/ProductDetail'
import { Switch, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </>
  );
}

export default App;
