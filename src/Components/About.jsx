import React from "react";
import '../App.css'; // You can add custom styles here or use MUI or Bootstrap
import pic from '../Assets/pic.jpeg';


const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="image-section">
        <img
          src={pic} // Replace with actual image source
          alt="Restaurant Interior"
          className="about-us-image"
        />
      </div>
      <div className="text-section">
        <h2 className="title">About us</h2>
        <h3>Welcome to HAPPY FOOD</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p className="since">Since: <span>1990 - 2024</span></p>
      </div>
    </div>
  );
};

export default AboutUs;
