import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { useNavbar } from '../hooks/useNavbar';
import { useCart } from '../../cart/hooks/useCart'; // <--- 1. Import the Cart Hook
import './Navbar.css';


const Navbar = () => {
  const { showNavbar } = useNavbar();
  const { cartItems } = useCart(); // <--- 2. Get the items from global storage

  // 3. Calculate total number of items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (!showNavbar) return null;

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo-container">
        <Link to="/home"> {/* <--- FIXED: Added "/" for absolute path */}
          <img 
            src="/ALFARES_logo.png" 
            alt="Al Fares Logo" 
            className="navbar-logo" 
          />
        </Link>
      </div>

      {/* Right Side: Navigation Icons */}
      <div className="navbar-links">
        <Link to="/home" className="nav-icon-link" aria-label="Home"> {/* <--- FIXED: Added "/" */}
          <FaHome size={24} />
        </Link>
        
        <Link to="/cart" className="nav-icon-link cart-container-icon" aria-label="Cart">
          <FaShoppingCart size={24} />
          {/* 4. Show Red Badge if items exist */}
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;