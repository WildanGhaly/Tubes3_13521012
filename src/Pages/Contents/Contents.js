import { useState, useEffect } from "react";
import TextInput from '../../Components/TextInput';
import { getSelectedValue } from "../../Components/Radio";
import './Contents.css';

function Contents() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [beMessages, setBeMessages] = useState(""); // Backend messages

  useEffect(() => {
    fetch(`http://localhost:8000/message/${getSelectedValue()}/${inputValue}`)
      .then((res) => res.json())
      .then((data) => setBeMessages(data.message));
  }, [inputValue]);

  useEffect(() => {
    if (beMessages !== "") {
      setMessages([...messages, { text: inputValue, isUser: true }, { text: beMessages, isUser: false }]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beMessages]);

  function handleSend(message) {
    setInputValue(message);
    // setMessages([...messages, { text: message, isUser: true }]);
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
