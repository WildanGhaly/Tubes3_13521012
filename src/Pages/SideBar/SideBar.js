import { useEffect, useState } from 'react';
import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar({messages, setMessages, newButtons}) {
  const [buttonCount, setButtonCount] = useState(0);

  const handleNewButton = () => {
    // do something else
    if (messages.length > 0){
      setMessages([]);
    }
  };

  useEffect(() => {
    if (messages.length === 2){
      setButtonCount(buttonCount + 1)
      newButtons[1]([...newButtons[0], <button key={buttonCount} className="my-button">Chat {buttonCount + 1}</button>]);
    } else if (messages.length === 1){
      // do nothing
    }
  }, [messages.length]);

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