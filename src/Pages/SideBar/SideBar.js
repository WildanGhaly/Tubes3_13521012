import { useEffect, useState, useRef } from 'react';
import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar(props) {
  const { messages, setMessages, newButtons, currentChat, setCurrentChat, username } = props;
  const [buttonCount, setButtonCount] = useState(0);
  const [isNewChat, setIsNewChat] = useState(true);

  const messagesRef = useRef(messages);
  const currentChatRef = useRef(currentChat);
  const isNewChatRef = useRef(isNewChat);

  useEffect(() => {
    messagesRef.current = messages;
    currentChatRef.current = currentChat;
  }, [messages, currentChat]);

  const handleNewButton = () => {
    if (!isNewChat) {
      setMessages([]);
      messagesRef.current = [];
    }
  };

  function insertMessage(username, chatName, chatNumber, messages) {
    fetch(`http://localhost:8000/insertMessage/${username}/${chatName}/${chatNumber}/${messages}`)
      .then((res) => res.json())
      .then((data) => (data.message));
  }

  useEffect(() => {
    if (messagesRef.current.length === 0) {
      setIsNewChat(true);
      isNewChatRef.current = true;
    } else if (messagesRef.current.length === 2 || messagesRef.current.length === 1) {
      const newButtonCount = buttonCount + 1;
      setCurrentChat('Chat' + newButtonCount);
      currentChatRef.current = 'Chat' + newButtonCount;
      setButtonCount(newButtonCount);
      newButtons[1]([...newButtons[0], <button key={newButtonCount} className="my-button">Chat {newButtonCount}</button>]);
      setIsNewChat(false);
      isNewChatRef.current = false;
    } else {
      setIsNewChat(false);
      isNewChatRef.current = false;
    }

    if (messagesRef.current.length !== 0 && !isNewChatRef.current) {
      console.log(messagesRef.current[messagesRef.current.length - 1])
      insertMessage(username, currentChatRef.current, messagesRef.current.length - 1, messagesRef.current[messagesRef.current.length - 2].text)
      insertMessage(username, currentChatRef.current, messagesRef.current.length, messagesRef.current[messagesRef.current.length - 1].text)
    } else {
      console.log('no messages')
      console.log(messagesRef.current.length)
      console.log(!isNewChat)
    }

  }, [messages]);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <button className="my-button" onClick={handleNewButton}> + New Chat </button>
        {newButtons}
      </div>
      <Radio />
    </div>
  );
}

export default SideBar;