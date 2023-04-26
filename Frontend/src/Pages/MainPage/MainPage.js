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
  const [isSending, setIsSending] = useState(false);

  const effectRunUser = useRef(false);
  const effectRunChat = useRef(false);

  function loadMessages(chatMessagesArray) {
    setIsSending(false);
    setCurrentChat(chatMessagesArray[0]);
    setMessages([]);
    setMessages(prevMessages => (
      [...prevMessages].concat(chatMessagesArray.slice(1).map(([_, text], i) => (
        { text: text, isUser: i % 2 === 0 }
      )))
    ));
  }

  useEffect(() => {
    if (!effectRunUser.current) {
      if (!usernameLoaded) {
        setUsernameLoaded(true);
        fetch(`http://localhost:8000/load/${username}`)
          .then((res) => res.json())
          .then((data) => {
            setButtonCount(data.message.length);
            setNewButtons(prevButtons => (
              [...prevButtons].concat(data.message.map(([text], i) => (
                <button
                  key={buttonCount + i}
                  className="my-button"
                  onClick={() => loadMessages(data.message[i])} // change onClick handler
                >
                  {text}
                </button>
              )))
            ));
          });
      }
    }

    return () => {
      effectRunUser.current = true;
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
        username={username}
        isSending={isSending}
        setIsSending={setIsSending}>
      </SideBar>
      <Contents 
        messages={messages} 
        setMessages={setMessages}
        setIsSending={setIsSending}>
      </Contents>
    </div>
  );
}

export default MainPage;
