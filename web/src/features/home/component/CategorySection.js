import React from 'react';
import CategoryCard from './CategoryCard'; // <--- Don't forget this import!
import useCategoryNav from '../hooks/useCategoryNav';
import './CategorySection.css';

// Import your Icons (Using the correct 3-level path we fixed)
import bookIcon from '../../../assets/icon-book.svg';
import bagIcon from '../../../assets/icon-backpack.svg';
import toolsIcon from '../../../assets/icon-compass.svg';

const CategorySection = () => {
  const { navigateToCategory } = useCategoryNav();

  // 1. Restore the Data Array
  const categories = [
    {
      id: 1,
      label: 'Textbook & Pen',
      icon: <img src={bookIcon} alt="Books" width="60" />, 
      bgColor: '#2C3E50', // Navy Blue
      path: '/textbooks'
    },
    {
      id: 2,
      label: 'Bags & Gear',
      icon: <img src={bagIcon} alt="Bags" width="60" />, 
      bgColor: '#D35400', // Burnt Orange
      path: '/bags'
    },
    {
      id: 3,
      label: 'Engineering Tools',
      icon: <img src={toolsIcon} alt="Tools" width="60" />, 
      bgColor: '#F5CBA7', // Beige
      path: '/tools'
    }
  ];

  return (
    <section className="sectionContainer">
      <div className="gridContainer">
        
        {/* 2. Restore the Map Function to render cards */}
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            icon={cat.icon}
            bgColor={cat.bgColor}
            path={cat.path}
            onClick={navigateToCategory}
          />
        ))}

      </div>
    </section>
  );
};

export default CategorySection;