import "./style.scss";
import React, { useState } from "react";
import logo from './pretty.png';

const Signup = () => {
    function Signup() {
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
            const response = await axios.post('http://localhost:3000/signup', {
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

export default Signup;

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
