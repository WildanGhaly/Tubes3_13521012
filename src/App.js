import React, { useState } from 'react'; 
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(username, password) {
    // Check the username and password against some predefined values
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;