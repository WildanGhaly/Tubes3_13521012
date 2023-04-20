import { useState } from "react";
import TextInput from '../../Components/TextInput';
import './Contents.css';

function Contents() {
  const [messages, setMessages] = useState([]);

  function handleSend(message) {
    setMessages([...messages, message]);
  }

  return (
    <div className="content">
      <TextInput onSend={handleSend} />
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default Contents;
