import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const Navbar = () => {
  const { showNavbar } = useNavbar();

  // If the hook says hide it, we return null (render nothing)
  if (!showNavbar) return null;

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo-container">
        <Link to="HomePage">
          <img 
            src="/ALFARES_logo.png" 
            alt="Al Fares Logo" 
            className="navbar-logo" 
          />
        </Link>
      </div>

      {/* Right Side: Navigation Icons */}
      <div className="navbar-links">
        <Link to="HomePage" className="nav-icon-link" aria-label="Home">
          <FaHome size={24} />
        </Link>
        
        <Link to="/cart" className="nav-icon-link" aria-label="Cart">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;