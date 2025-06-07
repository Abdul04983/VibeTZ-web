import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to <span className="brand">VibeTZ</span></h1>
      <p>Your global social vibe starts here.</p>
      <button onClick={() => navigate('/home')}>Anza Safari</button>
    </div>
  );
};

export default WelcomeScreen;
