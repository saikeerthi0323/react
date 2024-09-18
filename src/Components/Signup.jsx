import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS for styling

function Reservation() {
  return (
    <div className="reservation-page">
      <div className="form-container">
        <h1>Signup Form</h1><br></br>
        
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
          </div>
          <Link to="/">
              <button className="btn btn-secondary mt-4 w-100">Submit</button>
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
