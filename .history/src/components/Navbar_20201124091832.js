import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.webp';


export default function Navbar() {
    return (
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <a href="#" class="navbar-brand">
            Brand
          </a>
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
              <a href="#" class="nav-item nav-link active">
                Home
              </a>
             
            </div>
            <div class="navbar-nav ml-auto">
              <a href="#" class="nav-item nav-link">
                Cart
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
}
