import React from 'react';
import {FaArrowRight } from 'react-icons/fa';
import './WelcomeScreen.css'; // Import WelcomeScreen.css

const WelcomeScreen = ({ handleStartChat }) => {
  return (
    <div className="welcomeScreen">
      <div>
        <div className="content">
            <img src="/logochat.png" alt="Chat Logo" className="logo" />
            <h1 className="title" >Hello <br />I'm Chatty</h1>
            <p className="description">
            Start chatting with Nots AI now. Ask me anything related to school!
            </p>
            <button className="startButton" onClick={handleStartChat}><div>Continue</div><FaArrowRight className='right'/></button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
