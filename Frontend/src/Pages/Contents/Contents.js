// import { useState, useEffect } from "react";
import TextInput from '../../Components/TextInput';
import { getSelectedValue } from "../../Components/Radio";
import './Contents.css';

function Contents({messages, setMessages, setIsSending}) {

  function appendMessage(message) {
    if (message === "") return;
    fetch(`http://localhost:8000/message/${getSelectedValue()}/${message}`)
      .then((res) => res.json())
      .then((data) => setMessages([...messages, 
                        { text: message, isUser: true }, 
                        { text: data.message, isUser: false }
                      ]));
  }

  function handleSend(message) {
    appendMessage(message);
    setIsSending(true);
  }

  return (
    <div className="content">
      <TextInput onSend={handleSend} />
      {messages.length > 0 && (
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? "user-message" : "bot-message"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contents;
