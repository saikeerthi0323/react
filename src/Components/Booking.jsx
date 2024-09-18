// src/Components/Dashboard.jsx
import React from 'react';
import Header from './Header';
import { menuData } from './Table'; // Ensure this matches the export in FoodData.js
import { Link } from 'react-router-dom';
import '../App.css';

function Booking() {
  return (
    <div>
      <Header />
      <div className='maincard'>
        {menuData.map((item) => (
          <div className='card' key={item.id}>
            <Link to={`/about/${item.id}`}>
              <img src={item.image} alt={item.TableName} />
            </Link>
            <p>ID: {item.id}</p>
            <p> Name: {item.TableName}</p>
            <p>Description: {item.Description}</p>
            <p>Price: ${item.Price}</p>
            <button>Add to Booking</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
