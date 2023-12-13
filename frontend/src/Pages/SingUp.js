import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/SignUp.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    date_of_birth: '',
    city: '',
    email: '',
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/users/signUp', formData);

      if (response.data && response.data.userId) {
        console.log('User created successfully:', response.data);

      
        setShowSuccessModal(true);
      } else {
        console.error('Error creating user:', response.data.error);
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  const handleLoginClick = () => {
  
    setShowSuccessModal(false);


    navigate('/login');
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Family Name:</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Signup</button>
      </form>

{showSuccessModal && (
        <div className="success-modal">
          <p id='dd'>Signup successful!</p>
          <button onClick={handleLoginClick} id='log'>Login</button>
        </div>
)}
</div>
);
};

export default SignupPage;
