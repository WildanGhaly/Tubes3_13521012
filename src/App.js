import React, { useState } from 'react'; 
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(loginValid) {
    // Check the username and password against some predefined values
    if (loginValid) {
      setIsLoggedIn(true);
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <Login onLogin={handleLogin}/>}
    </div>
  );
}

export default App;