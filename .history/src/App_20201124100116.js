import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/Notfound';
import { Switch, Route } from "react-router-dom";
import { ProductDataContext } from './context';





function App() {
  
useEffect(() => {
  
})

  const getProductData = async () => {
    let respose = fet
  }
  

  const [productData, setProductData] = useState([])


  return (
    <>
      <ProductDataContext.Provider value={{ productData, setProductData }}>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/shoppingcart" component={ShoppingCart} exact />
          <Route path="/productdetail" component={ProductDetail} exact />
          <Route component={NotFound} />
        </Switch>
      </ProductDataContext.Provider>
    </>
  );
}

export default App;
