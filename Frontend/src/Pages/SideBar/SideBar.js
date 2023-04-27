import { useEffect, useState, useRef } from 'react';
import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar(props) {
  const { messages, setMessages, newButtons, setNewButtons, currentChat, setCurrentChat, username, isSending, setIsSending, setActiveButtonIndex } = props;
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
    } else if ((messagesRef.current.length === 2 || messagesRef.current.length === 1) && isSending) {
      const newButtonCount = newButtons.length + 1;
      setCurrentChat('Chat ' + newButtonCount);
      setActiveButtonIndex(newButtonCount - 1);
      currentChatRef.current = 'Chat ' + newButtonCount;
      setIsSending(false);
      setNewButtons(prevButtons => (
        [...prevButtons].concat(
          <button key={newButtonCount} className="my-button button-clicked">
            Chat {newButtonCount}
          </button>
        )
      ));
      setIsNewChat(false);
      isNewChatRef.current = false;
    } else {
      setIsNewChat(false);
      isNewChatRef.current = false;
    }

    if (messagesRef.current.length !== 0 && !isNewChatRef.current && isSending) {
      console.log(messagesRef.current[messagesRef.current.length - 1])
      insertMessage(username, currentChatRef.current, messagesRef.current.length - 1, messagesRef.current[messagesRef.current.length - 2].text)
      insertMessage(username, currentChatRef.current, messagesRef.current.length, messagesRef.current[messagesRef.current.length - 1].text)
    } else {
      // console.log('no messages')
      // console.log(messagesRef.current.length)
      // console.log(!isNewChat)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <button className={`my-button ${isNewChat ? "button-clicked" : "button-not-clicked"}`} onClick={handleNewButton}> + New Chat </button>
        {newButtons}
      </div>
      <Radio />
    </div>
  );
}

export default SideBar;