import React from "react";
import "./textbookspage.css";
import textbooksData from "./textbooksData";
import ProductCard from "../components/ProductCard";


const TextbooksPage = () => {
  return (
    <div className="products-container">
      <h1 className="page-title">Textbooks & School Supplies</h1>

      <div className="products-grid">
        {textbooksData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default TextbooksPage;
