import './TextInput.css';
import handleSend from './HandleSend/HandleSend.js';

function TextInput() {
    return (
        <div className="user-text-input">
            <input type="text" id="my-input" placeholder="Enter your text here" />
            <label htmlFor="my-input" style={{ display: "none" }}>
                Enter your text here
            </label>
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default TextInput;