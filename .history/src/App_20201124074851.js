import React, { Fragment } from "react";
import logo from './images/logo.webp';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import Cart from './Pages/Cart';
import ProductDetail from './components/ProductDetail'
import { Switch, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={ ProductList}/>

      </Switch>
     
    </>
  );
}

export default App;
