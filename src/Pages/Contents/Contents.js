import { useState } from "react";
import TextInput from '../../Components/TextInput';
import './Contents.css';

function Contents() {
  const [messages, setMessages] = useState([]);

  function handleSend(message) {
    setMessages([...messages, { text: message, isUser: true }]);
    /* Call backend here */
    setMessages([...messages, { text: message, isUser: true }, { text: "Ya Ndak Tahu", isUser: false }]);
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
