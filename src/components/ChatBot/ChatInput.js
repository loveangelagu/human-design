import React from 'react';
import './ChatInput.css';

const ChatInput = ({ value, onChange, onSend, onKeyPress, placeholder }) => {
  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send-button" onClick={onSend}>
        Let's Chat 💫
      </button>
    </div>
  );
};

export default ChatInput; 