import React from "react";
import bagsData from "./bagsData";
import ProductCard from "../components/ProductCard";

import "./bagspage.css";

const BagsPage = () => {
  return (
    <div className="bags-container">
      <h1 className="bags-title">Bags Collection</h1>

      <div className="bags-grid">
        {bagsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BagsPage;
