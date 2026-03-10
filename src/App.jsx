import { useState } from "react";
import { products } from "./component/Products";
import ProductCard from "./component/ProductCard";
import SearchBar from "./component/Searchbar";
import Filter from "./component/Filter";
import "./App.css";


function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-bg">
      <div className="app-container">

        {/* ── Header ── */}
        <header className="app-header">
          <p className="app-eyebrow">✦ Curated Collection ✦</p>
          <h1 className="app-title">Product Store</h1>
          <p className="app-subtitle">Search and discover our products</p>
        </header>

        {/* ── Search ── */}
        <SearchBar value={search} onChange={setSearch} />

    

        {/* ── Results count ── */}
        <p className="app-count">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"} found
        </p>

        {/* ── Product List ── */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="empty-state">
              <span className="empty-icon">∅</span>
              <p className="empty-title">No products found</p>
              <p className="empty-hint">Try a different search or category</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;