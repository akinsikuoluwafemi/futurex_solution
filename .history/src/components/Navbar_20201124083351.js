import React, {Fragment} from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.webp';


export default function Navbar() {
    return (
      <div className=" ">
        <div class="bg-dark">
          <div class="container navbar navbar-expand-lg navbar-dark ">
            <NavLink class="navbar-brand" to="/">
              Peeps
            </NavLink>
            <button
              class="border navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#contentOfNavbar"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="contentOfNavbar" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link badge badge-success">
                    {/* {userData.isLoggedIn ? `Hi ${firstName}` : null} */}
                    {/* Home */}
                  </a>
                </li>
              </ul>


              <li class="nav-item active">
                <a class="nav-link badge badge-success">
                  Home
                </a>
              </li>

                <>
                  <NavLink
                    style={{ margin: "0 1rem" }}
                    class="nav-link mx-2"
                    to="/login"
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    style={{
                      padding: "6px 12px",
                      background: "green",
                      color: "white",
                      borderRadius: "3px",
                    }}
                    class=" btn  text-white border"
                    to="/signup"
                  >
                    Join for free
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
