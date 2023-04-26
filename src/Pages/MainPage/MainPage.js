import React, { useState, useEffect } from 'react';
import Contents from "../Contents/Contents";
import SideBar from "../SideBar/SideBar";
import "./MainPage.css";

function MainPage({username}) {
  const [messages, setMessages] = useState([]);
  const newButtons = useState([]);
  const [currentChat, setCurrentChat] = useState("");

  return (
    <div className="container">
      <SideBar
        messages={messages}
        setMessages={setMessages}
        newButtons={newButtons}
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
