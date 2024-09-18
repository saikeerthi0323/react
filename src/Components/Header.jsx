import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faChartLine, faTachometerAlt, faInfoCircle, faPhone, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import '../App.css'; // Import custom CSS file

function Header() {
  const location = useLocation(); // Get current location

  // Don't show the sidebar if the current route is '/login'
  if (location.pathname === '/') {
    return null; // Return nothing (no navbar) for the login page
  }

  return (
    <div className='sidenav'>
      <div className='navbar-brand'>Bistro Bella</div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/menu'>
            <FontAwesomeIcon icon={faUtensils} /> Menu
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/dashboard'>
            <FontAwesomeIcon icon={faChartLine} /> Dasboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/booking'>
            <FontAwesomeIcon icon={faTachometerAlt} /> Booking
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>
            <FontAwesomeIcon icon={faInfoCircle} /> About Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>
            <FontAwesomeIcon icon={faPhone} /> Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
