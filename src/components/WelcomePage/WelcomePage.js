import React, { useState } from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onContinue }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleContinue = () => {
    if (selectedType) {
      localStorage.setItem('userType', selectedType);
      onContinue(selectedType);
    }
  };

  return (
    <div className="welcome-page">
      {/* Floating Sparkles */}
      <div className="sparkle" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
      <div className="sparkle" style={{top: '20%', right: '20%', animationDelay: '0.5s'}}></div>
      <div className="sparkle" style={{top: '60%', left: '10%', animationDelay: '1s'}}></div>
      <div className="sparkle" style={{top: '80%', right: '15%', animationDelay: '1.5s'}}></div>
      <div className="sparkle" style={{top: '40%', right: '30%', animationDelay: '2s'}}></div>

      <div className="welcome-container">
        <div className="character">
          <div className="character-hair"></div>
          <div className="character-face"></div>
          <div className="character-eyes"></div>
          <div className="character-smile"></div>
          <div className="character-dress"></div>
        </div>
        
        <h1 className="welcome-title">Hello, Beautiful Soul! ✨</h1>
        
        <p className="welcome-subtitle">
          Welcome to your magical Human Design journey! I'm here to help you discover your unique path.
        </p>
        
        <p className="welcome-question">
          Which part of your journey has you stumblin'? 🌟
        </p>
        
        <div className="type-selection-container">
          <select 
            value={selectedType}
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
        </div>
        
        <button 
          onClick={handleContinue}
          className={`continue-button ${selectedType ? 'enabled' : 'disabled'}`}
          disabled={!selectedType}
        >
          Continue Your Journey ✨
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;