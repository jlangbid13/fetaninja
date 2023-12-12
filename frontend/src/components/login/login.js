import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // Make sure the URL is correct based on the server setup
    axios.post('http://localhost:3001/api/user/login', user)
      .then((res) => {
        // Assuming the server sends back a message 'Login Successful' on successful login
        if (res.data.message === 'Login Successful') {
          alert(res.data.message);
          setLoginUser(res.data.user);
          navigate('/Home'); // Change '/Sched' to your post-login redirect route
        } else {
          // If the login is not successful, the server should send back a descriptive message
          alert(res.data.message);
        }
      })
      .catch((error) => {
        // Error handling
        console.error('Login error:', error.response ? error.response.data : error.message);
        alert('Failed to log in. Please check your credentials and try again.');
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => navigate('/register')}>Register</div>
    </div>
  );
};

export default Login;
