import React from "react";
import toolsData from "./toolsData";
import ProductCard from "../components/ProductCard";
import "./toolspage.css";

const ToolsPage = () => {
  return (
    <div className="tools-container">
      <h1 className="tools-title">Tools & School Supplies</h1>

      <div className="tools-grid">
        {toolsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
