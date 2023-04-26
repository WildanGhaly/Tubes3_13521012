import React, { useState, useEffect, useRef } from 'react';
import Contents from "../Contents/Contents";
import SideBar from "../SideBar/SideBar";
import "./MainPage.css";

function MainPage({username}) {
  const [messages, setMessages] = useState([]);
  const [newButtons, setNewButtons] = useState([]);
  const [currentChat, setCurrentChat] = useState('');
  const [buttonCount, setButtonCount] = useState(0);
  const [usernameLoaded, setUsernameLoaded] = useState(false);
  const effectRun = useRef(false);

  // Load newButtons from database
  useEffect(() => {
    if (!effectRun.current) {
      if (!usernameLoaded) {
        setUsernameLoaded(true);
        fetch(`http://localhost:8000/load/${username}`)
          .then((res) => res.json())
          .then((data) => {
            setButtonCount(data.message.length);
            setNewButtons(prevButtons => (
              [...prevButtons].concat(data.message.map(([text], i) => (
                <button key={buttonCount + i} className="my-button">
                  {text}
                </button>
              )))
            ));
          });
      }
    }

    return () => {
      effectRun.current = true;
    };
  }, [usernameLoaded]);

  return (
    <div className="container">
      <SideBar
        messages={messages}
        setMessages={setMessages}
        newButtons={newButtons}
        setNewButtons={setNewButtons}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        username={username}>
      </SideBar>
      <Contents 
        messages={messages} 
        setMessages={setMessages}>
      </Contents>
    </div>
  );
}

export default MainPage;
