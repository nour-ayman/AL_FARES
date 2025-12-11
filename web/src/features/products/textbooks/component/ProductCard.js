import React from "react";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />

      <h3 className="product-name">{product.name}</h3>

      <p className="price">{product.price} EGP</p>

      <button className="add-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
