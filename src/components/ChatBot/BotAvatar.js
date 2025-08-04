import React from 'react';
import './BotAvatar.css';

const BotAvatar = () => {
  return (
    <div className="bot-avatar">
      <div className="bot-face">
        <div className="bot-eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="bot-mouth"></div>
        <div className="bot-cheeks cheek-left"></div>
        <div className="bot-cheeks cheek-right"></div>
      </div>
    </div>
  );
};

export default BotAvatar; 