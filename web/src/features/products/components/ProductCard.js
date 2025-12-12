import React, { useState } from "react";
import "./productcard.css";
// 1. Import the hook so we can talk to the Cart
import { useCart } from "../../cart/hooks/useCart";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Get the function
  const [isAdded, setIsAdded] = useState(false); // Local state for visual feedback

  const handleAddToCart = () => {
    // 1. Add the item to global storage
    addToCart(product);

    // 2. Change button text temporarily
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000); // Reset after 1 second
  };

  return (
    <div className="product-card">
      <div className="img-box">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>

      <h3 className="product-name">{product.name}</h3>

      <p className="price">{product.price} EGP</p>

      {/* 3. The Button with Click Event */}
      <button 
        className={`add-btn ${isAdded ? "added" : ""}`} 
        onClick={handleAddToCart}
        disabled={isAdded} // Prevent double clicks
      >
        {isAdded ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;