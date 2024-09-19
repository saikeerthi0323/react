import React from 'react';
import './App.css';
import Login from './Components/Login.jsx';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './Components/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound.jsx';
import About from './Components/About.jsx';
import Menu from './Components/Menu.jsx'; // Added for menu display
import Contact from './Components/Contact.jsx'; // Added for contact page
import Header from './Components/Header.jsx';
import Booking from './Components/Booking'; 
import Dashboard from './Components/Dashboard.jsx';


function App() {
  return (
    <div>
      <Router>
        <Header /> {/* Ensure header is included on every page */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} /> {/* New route for menu */}
          <Route path='/contact' element={<Contact />} /> {/* New route for contact page */}
          <Route path='/booking' element={<Booking />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} /> {/* Catch-all for undefined routes */}
         
         
         
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;











