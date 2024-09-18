import { render, screen } from '@testing-library/react';
import App from './App';

test('renders restaurant components', () => {
  render(<App />);

  // Check if the header or restaurant name is present
  const headerElement = screen.getByText(/restaurant name/i); // Adjust this based on actual text in your header component
  expect(headerElement).toBeInTheDocument();

  // Check if the menu link or text is present
  const menuLink = screen.getByText(/menu/i); // Adjust this based on actual link text for the menu
  expect(menuLink).toBeInTheDocument();

  // Check if the reservation link or text is present
  const reservationLink = screen.getByText(/reservation/i); // Adjust this based on actual link text for reservations
  expect(reservationLink).toBeInTheDocument();

  // Check if the contact link or text is present
  const contactLink = screen.getByText(/contact/i); // Adjust this based on actual link text for the contact page
  expect(contactLink).toBeInTheDocument();
});
