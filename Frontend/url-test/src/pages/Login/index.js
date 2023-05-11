import "./style.scss";
import React from "react";
import Login from "../../Components/Login/index.js"
import Signup from "../../Components/Signup/index.js"
import DeepakAndYo from "../../Components/Deepak_and_Yo/index.js"

const LoginSignup = () => {
    return (
    <div>
    <Login />
    <Signup />
    <DeepakAndYo />
</div>
    )
};

export default LoginSignup;