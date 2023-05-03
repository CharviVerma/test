import "./style.scss";
import React, { useState, useEffect } from "react";

const Signup = () => {
return(
    <div className="signin form">
        <form action="session/" method="post">
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
            <input/>

        </form>
    </div>
)
}

export default Signup;