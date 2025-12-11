import React from 'react';
import './CategoryCard.css'; // Import the specific styles for the card

const CategoryCard = ({ icon, bgColor, path, onClick }) => {
  return (
    <div 
      className="card" 
      style={{ backgroundColor: bgColor }} // Dynamic background color from props
      onClick={() => onClick(path)}      // Triggers the navigation when clicked
    >
      <div className="iconCircle">
        {/* The icon prop contains the <img> tag we passed from the Section */}
        {icon}
      </div>
    </div>
  );
};

export default CategoryCard;