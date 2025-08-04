import React, { useState } from 'react';
import BotAvatar from './BotAvatar';
import ChatInput from './ChatInput';
import chatService from '../../services/chatService';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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
      // Use the chat service for future API integration
      const response = await chatService.sendMessage(currentInput);
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
            <p className="question-text">Which part of your journey has you stumblin'?</p>
          </>
        ) : (
          <div className="messages-container">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text}
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