import React, { useState } from 'react';
import Contents from "../Contents/Contents";
import SideBar from "../SideBar/SideBar";
import "./MainPage.css";

function MainPage() {
  const [messages, setMessages] = useState([]);
  const newButtons = useState([]);
  return (
    <div className="container">
      <SideBar
        messages={messages}
        setMessages={setMessages}
        newButtons={newButtons}>
      </SideBar>
      <Contents 
        messages={messages} 
        setMessages={setMessages}>
      </Contents>
    </div>
  );
}

export default MainPage;
