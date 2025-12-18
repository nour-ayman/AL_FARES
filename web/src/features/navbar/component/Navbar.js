import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useNavbar } from '../hooks/useNavbar';
import { useCart } from '../../cart/hooks/useCart';
import allProducts from '../../products/allProducts';
import './Navbar.css';

const Navbar = () => {
  const { showNavbar } = useNavbar();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Count cart items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Search states
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Toggle search open/close
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setResults([]);
    setQuery("");
  };

  // Live search
  const handleSearch = (text) => {
    setQuery(text);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setResults(filtered);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest(".search-area") && !e.target.closest(".search-icon-btn")) {
        setResults([]);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  if (!showNavbar) return null;

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="navbar-logo-container">
          <Link to="/home">
            <img src="/ALFARES_logo.png" className="navbar-logo" alt="logo" />
          </Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="navbar-links">

          <Link to="/home" className="nav-icon-link">
            <FaHome size={24} />
          </Link>

          {/* SEARCH ICON */}
          <div
            className={`nav-icon-link search-icon-btn ${showSearch ? "active" : ""}`}
            onClick={toggleSearch}
          >
            <FaSearch size={24} />
          </div>

          <Link to="/cart" className="nav-icon-link cart-container-icon">
            <FaShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

        </div>
      </nav>

      {/* SEARCH BAR BELOW NAV */}
      {showSearch && (
        <div className="search-area">
          <input
            className="search-input-bar"
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {/* DROPDOWN RESULTS */}
          {results.length > 0 && (
            <div className="search-dropdown-bar">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="dropdown-item"
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    setShowSearch(false);
                    setResults([]);
                    setQuery("");
                  }}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
