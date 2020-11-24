import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.webp';
import '../App.css';




export default function Navbar() {
    return (
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-light bg-info">
          <Link to="/" class="navbar-brand">
            {/* <img src={Logo} alt="logo" className="logo-img" /> */}
            
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/" class="nav-item nav-link active text-white">
                Home
              </Link>
            </div>
            <div class="navbar-nav ml-auto">
              <Link to="/shoppingcart" class="nav-item nav-link text-white cart">
                <i class="fas fa-shopping-cart"></i>
                <small>2</small>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
}
