import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../CSS/WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
  
    navigate('/SignUp');
  };

  const handleGuestVisit = async () => {
    try {
     
      await axios.post('http://localhost:5000/visits/incrementGuests/');

      navigate('/Landing');
    } catch (error) {
      console.error('Error incrementing guest visits:', error);
 
    }
  };

  const handleDash = () => {

    navigate('/dashboard');
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Our Site</h1>
      <p>Explore our products and services!</p>
      <div className="buttons">
        <button onClick={handleSignup} className="signup-button">
          Signup
        </button>
        <button onClick={handleGuestVisit} className="guest-visit-button">
          Guest Visit
        </button>
        <button onClick={handleDash} className="guest-visit-button">
          ADMIN Dashboard
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
