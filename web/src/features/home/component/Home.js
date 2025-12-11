import React from 'react';
import CategorySection from './CategorySection'; // The Retro Cards
import './Home.css'; // Optional container styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar is handled globally in App.js, so we don't put it here! */}

      <main>
        {/* The Main Feature of the Home Page */}
        <CategorySection />
      </main>
    </div>
  );
};

export default Home;