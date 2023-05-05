import "./style.scss";
import React, { useState, useEffect } from "react";
import logo from './pretty.png';

const Login = () => {
return(
    <div className="container">
    <div className="row justify-content-center">
<div className="first form col-lg-9">
    <div className="row box">
        <div className="col-lg-6">
    <form action="session/" method="post" id="sign-in-form">
        <div className="form-fields">
            <fieldset>
                <label for="login">Username or Email Address</label>
                <input type="text" placeholder="username" autocomplete="off" classname="username" id="username"/>
            </fieldset>
            <fieldset>
                <label for="password" className="password" id="password">Password</label>
                <input type="password" placeholder="password" autocomplete="off" className="password" id="password"/>
            </fieldset>
        </div>
        <input type="submit" className="button form-sub" value="Sign In" data-cypress="submit-sign-in-btn"/>

    </form>
    </div>
    <div className="col-lg-6">
    <div className="sidebar">
    <img src= {logo} alt='profilee' className='profilee'></img>
    </div>
    </div>
    </div>
</div>
</div>
</div>
)
}

export default Login;