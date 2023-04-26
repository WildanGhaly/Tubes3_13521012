import React, { useEffect, useState } from 'react'; 
import MainPage from './Pages/MainPage/MainPage';
import Login from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");

  function handleLogin(loginValid) {
    // Check the username and password against some predefined values
    if (loginValid) {
      setIsLoggedIn(true);
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? <MainPage username={currentUsername}/> : 
        <Login 
          onLogin={handleLogin}
          username={username}
          setUsername={setUsername}
          setCurrentUsername={setCurrentUsername}
        />}
    </div>
  );
}

export default App;