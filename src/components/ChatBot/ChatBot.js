import React, { useState } from 'react';
import BotAvatar from './BotAvatar';
import ChatInput from './ChatInput';
import chatService from '../../services/chatService';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userType, setUserType] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleContinue = () => {
    if (userType) {
      localStorage.setItem('userType', userType);
      setShowChat(true);
    }
  };

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: currentInput,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsTyping(true);

    try {
      // Use the chat service with user type for personalized responses
      const response = await chatService.sendMessage(currentInput, userType);
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        timestamp: response.timestamp
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback to a simple error message
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!showChat) {
    return (
      <div className="chat-container">
        <div className="sparkles">
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>
        
        <div className="welcome-badge">✨ Your Human Design Buddy ✨</div>
        
        <BotAvatar />
        
        <div className="chat-content">
          <h1 className="greeting-text">Hey there, beautiful soul! 🌸</h1>
          <p className="question-text">Which part of your journey has you stumblin'?</p>
        </div>
        
        <div className="type-selection">
          <select
            value={userType}
            onChange={handleTypeChange}
            className="type-dropdown"
          >
            <option value="">Choose your Human Design type...</option>
            <option value="Manifestor">Manifestor</option>
            <option value="Manifesting Generator">Manifesting Generator</option>
            <option value="Generator">Generator</option>
            <option value="Projector">Projector</option>
            <option value="Reflector">Reflector</option>
          </select>
          
          <button 
            onClick={handleContinue}
            className={`continue-button ${userType ? 'enabled' : 'disabled'}`}
            disabled={!userType}
          >
            Continue Your Journey ✨
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="sparkles">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      
      <div className="welcome-badge">✨ Your Human Design Buddy ✨</div>
      
      <BotAvatar />
      
      <div className="chat-content">
        {messages.length === 0 ? (
          <>
            <h1 className="greeting-text">Hey there, beautiful soul! 🌸</h1>
            <p className="question-text">As a {userType}, which part of your journey has you stumblin'?</p>
          </>
        ) : (
          <div className="messages-container">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text.split('\n').map((paragraph, index) => (
                    <p key={index} className="message-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <ChatInput
        value={currentInput}
        onChange={setCurrentInput}
        onSend={handleSendMessage}
        onKeyPress={handleKeyPress}
        placeholder={messages.length === 0 ? "Share what's on your heart..." : "Tell me more..."}
      />
    </div>
  );
};

export default ChatBot; 