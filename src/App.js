import React, { useState } from 'react';
import './App.css';

function Button(props) {
    return (
        <button className="my-button" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

function App() {
    const handleSend = () => {
        const userInput = document.getElementById("my-input").value;
        console.log(userInput);
        document.getElementById("my-input").value = "";
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-content">
                    <button className="my-button"> + New Chat </button>
                </div>
                <div className="user-radio-button">
                    <input type="radio" id="kmp" name="algorithm" value="kmp" />
                    <label htmlFor="kmp">KMP</label>
                    <input type="radio" id="bm" name="algorithm" value="bm" />
                    <label htmlFor="bm">BM</label>
                </div>
            </div>
            <div className="content">
                <div className="user-text-input">
                    <input type="text" id="my-input" placeholder="Enter your text here" />
                    <label htmlFor="my-input" style={{ display: "none" }}>
                        Enter your text here
                    </label>
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}


export default App;
