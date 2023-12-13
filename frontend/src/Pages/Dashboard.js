
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Dash.css'; 

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:5000/users/') 
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">ADMIN Dashboard</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{new Date(user.date_of_birth).toLocaleDateString()}</td>
              <td>{user.city}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
