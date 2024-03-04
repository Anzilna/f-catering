import axios from 'axios';

import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import baseUrl from '../Api';

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseUrl + "/", {
        email,
        password
      });

      const responseData = response.data;

      switch (responseData) {
        case "success":
          history("/home", { state: { id: email } });
          break;
        case "notexist":
          setErrorMessage("User does not exist. Please sign up.");
          break;
        case "fail":
          setErrorMessage("Incorrect email or password. Please try again.");
          break;
        default:
          setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  }

  return ( 
 
    <div className="container">
      <h1>AdminLogin</h1>
      <br></br>
      <form onSubmit={handleLogin}>
        
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        
          <br></br>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <br></br>
          <br></br>
        <button className='input99' type="submit" >Login</button>
        
      </form>
      <br></br>
   
        <p>Don't have an account? <div className='link'>
          <Link to="/adminregister">Sign Up</Link></div></p>
        
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    
    </div>
  );
}

export default Login;
