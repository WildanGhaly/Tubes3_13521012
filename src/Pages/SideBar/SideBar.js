import { useState } from 'react';
import './SideBar.css';
import Radio from '../../Components/Radio.js';

function SideBar() {
  const [buttonCount, setButtonCount] = useState(0);

  const handleNewButton = () => {
    setButtonCount(buttonCount + 1);
  };

  const newButtons = [];

  for (let i = 0; i < buttonCount; i++) {
    newButtons.push(<button key={i} className="my-button">Button {i + 1}</button>);
  }

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