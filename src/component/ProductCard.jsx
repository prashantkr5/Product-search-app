import React from "react";
import "./ProductCard.css";


function ProductCard({ product }) {
  const { name, category, price } = product;

  return (
    <div className="product-card">
      <div className="card-left">
    
        <div className="card-info">
          <h3 className="card-name">{name}</h3>
          <span className="card-category">{category}</span>
        </div>
      </div>
      <div className="card-price">
        ₹{price.toLocaleString("en-IN")}
      </div>
    </div>
  );
}

export default ProductCard;