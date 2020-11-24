import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.webp';


export default function Navbar() {
    return (
      
             <nav id="page-nav">
      <!-- [THE HAMBURGER] -->
      <label for="hamburger">
        
        
        <!-- &#9776; -->
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>


      </label>
      <input type="checkbox" id="hamburger"/>

      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tech.html">Tech</a></li>
        <li><a href="games.html">Games</a></li>
        <li><a href="reviews.html">Reviews</a></li>
      </ul>
    </nav>
    );
}
