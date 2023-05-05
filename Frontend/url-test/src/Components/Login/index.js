import "./style.scss";
import React, { useState } from "react";
import logo from './pretty.png';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
    }

    // const form = document.getElementById('sign-in-form')
    // form.addEventListener('submit', signInUser)
    // async function signInUser(event){
    //     event.preventDefault()
    //     const username = document.getElementById('username').value
    //     const password = document.getElementById('password').value

    //     const result = await fetch('/api/signin', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password
    //         })
    //     }).then((res) => res.json())
    //     console.log(result);
    // }
return(
    <div className="container">
        <div className="row justify-content-center">
    <div className="first form col-lg-9">
        <div className="row box">
            <div className="col-lg-6">
        <form action="session/" method="post" id="sign-in-form" onSubmit={handleSubmit}>
            <div className="form-fields">
                <fieldset>
                    <label for="Username">Username or Email Address</label>
                    <input type="text" placeholder="username" autocomplete="off" classname="username" id="username"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </fieldset>
                <fieldset>
                    <label for="password" className="password" id="password">Password</label>
                    <input type="password" placeholder="password" autocomplete="off" className="password" id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
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