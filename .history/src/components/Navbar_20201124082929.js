import React, {Fragment} from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.webp';


export default function Navbar() {
    return (
      <div className="bg-dark" >
        <header className="container ">
          <div className="row">
            <div className="col navbar navbar-expand-lg navbar-dark">
              <NavLink to="/" className="navbar-brand ">
                <img
                  src={Logo}
                  alt="signature-fonts"
                  border="0"
                />{" "}
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#contentOfNavbar"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="contentOfNavbar" className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item ">
                                            <Mode/>
                                        </li> */}
                </ul>

                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <NavLink
                      exact
                      activeClassName="main-nav-active"
                      to="/"
                      className="nav-link  d-inline-block mx-3 text-white"
                    >
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="main-nav-active"
                      to="/about"
                      className="nav-link text-white d-inline-block mx-3"
                    >
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      exact
                      activeClassName="main-nav-active"
                      to="/portfolio"
                      className="nav-link text-white d-inline-block mx-3"
                    >
                      <span>Portfolio</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="main-nav-active"
                      to="/contact"
                      className="nav-link text-white d-inline-block ml-3"
                    >
                      <span>Contact</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}
