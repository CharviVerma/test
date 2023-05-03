import "./style.scss";
import React, { useState, useEffect } from "react";

const Signup = () => {
return(
    <div className="signin form">
        <form action="session/" method="post">
            <div className="form-fields">
                <fieldset>
                    <label for="login">Username or Email Address</label>
                    <input/>
                </fieldset>
                <fieldset>
                    <label></label>
                    <input/>
                </fieldset>
            </div>

        </form>
    </div>
)
}

export default Signup;