import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import '../App.css'; // Ensure the CSS file is correctly linked
import { Link } from 'react-router-dom';


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <div className='hi'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card style={{ width: '24rem' }} className="p-4">
        <Card.Title className="text-center mb-4">Bistro Bella</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Label>
             
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>
               
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="secondary" type="submit" className="mt-4 w-100">
              <Link to="/menu">Login</Link>
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/signup">Don't have an account? Sign up</Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Login;

