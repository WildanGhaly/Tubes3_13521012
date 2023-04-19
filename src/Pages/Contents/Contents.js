import { useState } from 'react';
import TextInput from '../../Components/TextInput';
import './Contents.css';

function Contents() {
  const [userInput, setUserInput] = useState('');

  function handleUserInput(input) {
    setUserInput(input);
  }

  return (
    <div className="content">
      <TextInput onSend={handleUserInput} />
      <p>{userInput}</p>
    </div>
  );
}

export default Contents;
