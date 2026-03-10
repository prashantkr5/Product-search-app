import React from "react";
import "./SearchBar.css";


function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar-wrapper">
      <span className="searchbar-icon" aria-hidden="true">🔍</span>
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search products"
      />
      {value && (
        <button
          className="searchbar-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;