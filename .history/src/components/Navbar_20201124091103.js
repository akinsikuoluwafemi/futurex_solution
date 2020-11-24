import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.webp';


export default function Navbar() {
    return (
      
        <>
            <nav className="nav">
                <ul className="nav-ordered-list">

                    <li className="nav-list"><a className="nav-link" href="#">Logo</a></li>
                    <li className="nav-list"><a className="nav-link mr-auto" href="#">Home</a></li>


                </ul>
                
            </nav>

            <span>

            </span>

                
            </>
    );
}
