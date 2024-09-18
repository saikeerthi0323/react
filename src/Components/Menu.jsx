import React from 'react';
import '../App.css';
import Header from './Header'; // Assuming Header is the component for the header
import img1 from '../Assets/img1.jpeg';
import img2 from '../Assets/img2.jpeg';
import img3 from '../Assets/img3.jpeg';
import img4 from '../Assets/img4.jpeg';
import img5 from '../Assets/img5.jpeg';
import img6 from '../Assets/img6.jpeg';
import img7 from '../Assets/img7.jpeg';
import img8 from '../Assets/img8.jpeg';
import img9 from '../Assets/img9.jpeg';
import img10 from '../Assets/img10.jpeg';
import img11 from '../Assets/img11.jpeg';
import img12 from '../Assets/img12.jpeg';
import img13 from '../Assets/img13.jpeg';
import img14 from '../Assets/img14.jpeg';
import img15 from '../Assets/img15.jpeg';

const foodItems = [
  { id: 1, title: 'Grilled Chicken Salad', description: 'A fresh salad with grilled chicken, mixed greens, and a light vinaigrette.', image: img1},
  { id: 2, title: 'Margherita Pizza', description: 'Classic pizza topped with fresh mozzarella, basil, and tomatoes.', image: img2},
  { id: 3, title: 'Spaghetti Carbonara', description: 'Spaghetti with creamy carbonara sauce, pancetta, and Parmesan cheese.', image: img3},
  { id: 4, title: 'Caesar Salad', description: 'Romaine lettuce, croutons, and Caesar dressing with a sprinkle of Parmesan.', image: img4},
  { id: 5, title: 'Beef Burger', description: 'Juicy beef patty with lettuce, tomato, and pickles in a toasted bun.', image: img5},
  { id: 6, title: 'Vegetable Stir Fry', description: 'Mixed vegetables stir-fried with a savory sauce and served with rice.', image: img6},
  { id: 7, title: 'Chicken Tenders', description: 'Crispy chicken tenders served with a side of honey mustard sauce.', image: img7},
  { id: 8, title: 'Fish Tacos', description: 'Soft tacos filled with battered fish, cabbage slaw, and a tangy sauce.', image: img8},
  { id: 9, title: 'Pasta Alfredo', description: 'Creamy Alfredo sauce over fettuccine pasta with grilled chicken.', image: img9},
  { id: 10, title: 'Chocalate Cake', description: 'Rich chocolate cake with a gooey molten center.', image: img10},
  { id: 11, title: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and fresh basil.', image: img11 },
  { id: 12, title: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.', image: img12 },
  { id: 13, title: 'Spaghetti Carbonara', description: 'Creamy pasta with pancetta, egg, and parmesan cheese.', image: img13 },
  { id: 14, title: 'Grilled Salmon', description: 'Perfectly grilled salmon fillet with a lemon dill sauce.', image: img14 },
  { id: 15, title: 'Beef Burger', description: 'Juicy beef patty with lettuce, tomato, and a special sauce.', image: img15 },
];

const Reservations = () => {
  return (
    <div className="layout-container">
      <Header className="header" />
      <div className="main-content">
        <div className="reservation-container">
          <h1>Our Resturant Food</h1>
          <div className="food-items">
            {foodItems.map(item => (
              <div className="food-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>

              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Reservations;

