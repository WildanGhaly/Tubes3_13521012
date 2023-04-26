import { useEffect, useState } from 'react';
import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar({messages, setMessages, newButtons, currentChat, setCurrentChat, username}) {
  const [buttonCount, setButtonCount] = useState(0);
  const [isNewCHat, setIsNewChat] = useState(true);

  const handleNewButton = () => {
    // do something else
    if (!isNewCHat){
      setMessages([]);
    }
  };

  function insertMessage(username, chatName, chatNumber, messages){
    fetch(`http://localhost:8000/insertMessage/${username}/${chatName}/${chatNumber}/${messages}`)
      .then((res) => res.json())
      .then((data) => (data.message));
  }

  useEffect(() => {
    if (messages.length === 0){
      setIsNewChat(true);
    } else if (messages.length === 2 || messages.length === 1){
      setButtonCount(buttonCount + 1)
      newButtons[1]([...newButtons[0], <button key={buttonCount} className="my-button">Chat {buttonCount + 1}</button>]);
      setCurrentChat("Chat" + (buttonCount + 1));
      setIsNewChat(false);
    } else {
      setIsNewChat(false);
    }

    if (messages.length !== 0){
      console.log(messages[messages.length - 1])
      insertMessage(username, currentChat, messages.length - 1, messages[messages.length-2].text)
      insertMessage(username, currentChat, messages.length, messages[messages.length-1].text)
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