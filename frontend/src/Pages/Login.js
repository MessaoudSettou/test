import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Login.css'; 

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/users/login', formData);

      if (!response.data.token) {
        throw new Error('Invalid response from the server');
      }
      await axios.post('http://localhost:5000/visits/incrementMembers/');
     
      navigate('/landing', {
        state: {
          token: response.data.token,
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
        }}
        ) 
    } catch (error) {
      if (error.response) {
        
        setError(error.response.data.message || 'Login failed');
      } else if (error.request) {
        
        setError('No response from the server');
      } else {
        
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
