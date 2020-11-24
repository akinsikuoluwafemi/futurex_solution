import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/Notfound';
import { Switch, Route } from "react-router-dom";
import { ProductDataContext } from './context';
import Home from './Pages/Home';




function App() {
  
  const [productData, setProductData] = useState([]);


useEffect(() => {
  getProductData()
})

  const getProductData = async () => {
    let response = fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
      setProductData(data)
    })
    .catch(error => {
      alert('an error occured when fetching data');
      console.log(error)
    })
    return response
  }
  

    console.log(productData);


  return (
    <>
      <ProductDataContext.Provider value={{ productData, setProductData }}>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shoppingcart" component={ShoppingCart} exact />
          <Route path="/productdetail" component={ProductDetail} exact />
          <Route component={NotFound} />
        </Switch>
      </ProductDataContext.Provider>
    </>
  );
}

export default App;
