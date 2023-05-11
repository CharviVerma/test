import "./style.scss";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import logo from './pretty.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3000/login', { username, password });
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the JWT token in local storage
        setError('');
        navigate(`/users/${response.data.user._id}`);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
return(
    <div className="container">
        <div className="row justify-content-center">
    <div className="first form col-lg-8">
        <div className="row box">
            <div className="col-lg-6">
        <form action="session/" method="post" id="sign-in-form" onSubmit={handleSubmit}>
            <div className="form-fields">
                <fieldset>
                    <label for="Username">Username or Email Address</label>
                    {error && <div>{error}</div>}
                    <input type="text" placeholder="Username" autoComplete="off" className="username" id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </fieldset>
                <fieldset>
                    <label for="password" className="password" id="password">Password</label>
                    <input type="password" placeholder="Password" autoComplete="off" className="password" id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
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
