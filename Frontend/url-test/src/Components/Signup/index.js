import "./style.scss";
import React, { useState } from "react";
import logo from './pretty.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
      
        const handleUsernameChange = (event) => {
          setUsername(event.target.value);
        }; 
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
        };
      
        const handleConfirmPasswordChange = (event) => {
          setConfirmPassword(event.target.value);
        };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
          }
      
          try {
            const response = await axios.post('http://localhost:3000/api/register', {
              username,
              email,
              password,
            });
            console.log(response.data);
            // Redirect to home page or login page
          } catch (error) {
            console.log(error);
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
                    <label for="Username">Username</label>
                    <input type="text" placeholder="Username" autoComplete="off" className="username" id="username"
                        value={username} onChange={handleUsernameChange} 
                    />
                </fieldset>
                <fieldset>
                    <label for="email" className="email" id="password">Email</label>
                    <input type="email" placeholder="Email" autoComplete="off" className="email" id="email"
                    value={email} onChange={handleEmailChange}
                    />
                </fieldset>
                <fieldset>
                    <label for="password" className="password" id="password">Password</label>
                    <input type="password" placeholder="Password" autocomplete="off" className="password" id="password"
                    value={password} onChange={handlePasswordChange} 
                    />
                </fieldset>
                <fieldset>
                    <label for="confirmPassword" className="confirmPassword" id="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" autocomplete="off" className="confirmPassword" id="confirmPassword"
                    value={confirmPassword} onChange={handleConfirmPasswordChange}
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
export default Signup;




