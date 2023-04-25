import React, { useEffect, useState } from 'react';
import './LoginPage.css';

function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(username, password) {
    fetch(`http://localhost:8000/register/${username}/${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Register success');
        } else {
          alert('Username already exists');
        }
      });
  }

  function handleLogin(username, password) {
    fetch(`http://localhost:8000/login/${username}/${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Login success');
          props.onLogin(true);
        } else {
          alert('Invalid username or password');
        }
      });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // perform login logic here
      if (username === '' || password === '') {
        alert('Username or password cannot be empty');
        return;
      }
      handleLogin(username, password);
    } else {
      // perform register logic here
      if (username === '' || password === '') {
        alert('Username or password cannot be empty');
        return;
      }
      handleRegister(username, password);
    }
  };

  const handleToggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-page">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username-input">Username:</label>
          <input type="text" id="username-input" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password:</label>
          <input type="password" id="password-input" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button type="button" onClick={handleToggleLogin}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
