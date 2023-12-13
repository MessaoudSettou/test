import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 
import '../CSS/Landing.css'; 

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); 

  return (
    <div className="landing-page">
      {state && state.token ? ( 
        <div>
          <h1 id='mmbr'>Welcome, {state.firstname} {state.lastname}!</h1>
       
        </div>
      ) : (
        <div>
          <h1>Welcome to the Store</h1>
         
        </div>
      )}
      
     
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
