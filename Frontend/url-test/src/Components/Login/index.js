import "./style.scss";
import React, { useState } from "react";
import logo from './pretty.png';

const Login = () => {

return(
    <div className="container">
        <div className="row justify-content-center">
    <div className="first form col-lg-8">
        <div className="row box">
            <div className="col-lg-6">
        <form action="session/" method="post" id="sign-in-form">
            <div className="form-fields">
                <fieldset>
                    <label for="Username">Username or Email Address</label>
                    <input type="text" placeholder="Username" autocomplete="off" classname="username" id="username"
                        
                    />
                </fieldset>
                <fieldset>
                    <label for="password" className="password" id="password">Password</label>
                    <input type="password" placeholder="Password" autocomplete="off" className="password" id="password"
                    />
                </fieldset>
            </div>
            <input type="submit" className="button form-sub btn btn-success"  value="Sign In" data-cypress="submit-sign-in-btn"/>

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