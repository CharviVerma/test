import "./style.scss";
import React, { useState, useEffect } from "react";
import logo from './pretty.png';

const Signup = () => {
return(
    <div>
    <div className="signin form">
        <form action="session/" method="post" className="form">
            <div className="form-fields">
                <fieldset>
                    <label for="login">Username or Email Address</label>
                    <input type="text" classname="username" id="username"/>
                </fieldset>
                <fieldset>
                    <label for="password" className="password" id="password">Password</label>
                    <input type="password" className="password" id="password"/>
                </fieldset>
            </div>
            <input type="submit" className="button form-sub" value="Sign In" data-cypress="submit-sign-in-btn"/>

        </form>
        <div className="sidebar">
        <img src= {logo} alt='profile' className='profile'></img>
        </div>
    </div>
    </div>
)
}

export default Signup;