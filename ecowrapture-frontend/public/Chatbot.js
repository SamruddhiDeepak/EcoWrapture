// src/Chatbot.js
import React from 'react';

const Chatbot = () => {
    return (
        <div className="chatbot-container">
            <h1>Welcome to EcoBot!</h1> {/* This will display the heading */}
            <iframe 
                src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/19/14/20241119141414-XTNQR4JD.json"
                width="100%"
                height="600"
                style={{border: "none"}}
                title="EcoWrapture Chatbot"
            />
        </div>
    );
};

export default Chatbot;
