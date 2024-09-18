import React from 'react';
import Header from './Components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './About';
import Menu from './Menu'; // New component for restaurant menu
import Contact from './Contact'; // New component for contact information


function Main() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
         
          <Route path='/about' element={<About />} /> {/* About page */}
          <Route path='/menu' element={<Menu />} /> {/* Restaurant menu */}
          <Route path='/contact' element={<Contact />} /> {/* Contact information */}
          
          
        </Routes>

        <Row className="mt-4">
          <Col sm={2}>
            {/* Sidebar or additional navigation can go here */}
          </Col>
          <Col sm={10}>
            <Dashboard /> {/* This can be adjusted based on your need */}
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default Main;
