import React from 'react';
import CategorySection from './CategorySection'; 
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar is handled globally in App.js */}

      <main>
        <h1 className="home-title">WHAT ARE YOU LOOKING FOR?</h1>
        
        {/* The Retro Cards */}
        <CategorySection />
      </main>
    </div>
  );
};

export default Home;