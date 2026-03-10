import React from "react";
import { categories } from "./Products";
import "./Filter.css";

function Filter({ activeCategory, onSelect }) {
  return (
    <div className="filter-wrapper" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeCategory === cat ? "filter-btn--active" : ""}`}
          onClick={() => onSelect(cat)}
          aria-pressed={activeCategory === cat}
        >
          <span className="filter-btn-icon">{categoryIcons[cat]}</span>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;