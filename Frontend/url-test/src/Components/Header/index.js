import "./style.scss";

import React from "react";
import { Link } from 'react-router-dom';
import logo from './first.png';
// import Login from "../../Components/Login/index.js"
// import Signup from "../../Components/Signup/index.js"


const Header = () => {
  return <div className="nav-header shadow-sm">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img src= {logo} alt='profile' className='profile'></img>
      </a>
  <div className="container-fluid">
    <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item1">
      <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item2">
          <button className="Signup btn btn-success"><a className="nav-link text-white p-0"  href="/Signup">Sign Up</a></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
};

export default Header;
