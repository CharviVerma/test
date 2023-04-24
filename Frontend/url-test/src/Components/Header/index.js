import "./style.scss";

import React from "react";
import { Link } from 'react-router-dom';
import Logo from './Pink logo.png';


const Header = () => {
  return <div class="nav-header shadow-sm">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
      <img src="Logo"></img>
      <ul class="navbar-nav">
      <li class="nav-item1">
      <Link class="nav-link" to="/">Login</Link>
        </li>
        <li class="nav-item2">
          <button class="Signup btn btn-success"><a class="nav-link text-white p-0"  href="/">Sign Up</a></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
};

export default Header;
