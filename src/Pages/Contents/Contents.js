import { useState, useEffect } from "react";
import TextInput from '../../Components/TextInput';
import { getSelectedValue } from "../../Components/Radio";
import './Contents.css';

function Contents() {
  const [messages, setMessages] = useState([]);
  const [beMessages, setBeMessages] = useState(""); // Backend messages

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setBeMessages(data.message));
  }, []);
  
  function handleSend(message) {
    setMessages([...messages, { text: message, isUser: true }]);
    /* Call backend here */
    setMessages([...messages, { text: message, isUser: true }, { text: beMessages, isUser: false }]);
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
