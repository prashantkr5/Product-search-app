# 🛍️ Product Store — React Multi-File Project

## Project Structure

```
src/
├── products.js          ← Data: product array, categories, icons
│
├── App.jsx              ← Root component — state + filtering logic
├── App.css              ← Global styles, layout, CSS variables
│
├── ProductCard.jsx      ← Renders a single product card (via props)
├── ProductCard.css      ← Card-specific styles + hover + animation
│
├── SearchBar.jsx        ← Controlled search input component
├── SearchBar.css        ← Search input styles + clear button
│
├── CategoryFilter.jsx   ← Category pill buttons component
└── CategoryFilter.css   ← Filter button styles + active state
```

## How It Works

### State (in App.jsx)

| State            | Type   | Purpose                                       |
| ---------------- | ------ | --------------------------------------------- |
| `search`         | string | Current search term                           |
| `activeCategory` | string | Selected category ("All" / "Electronics" / …) |

### Data Flow

```
App (state)
  ├── search ──────────────→ SearchBar (controlled input)
  ├── activeCategory ──────→ CategoryFilter (active pill)
  └── filteredProducts ────→ ProductCard[] (via .map())
```

### Filtering Logic (App.jsx)

```js
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());
  const matchesCategory =
    activeCategory === "All" || product.category === activeCategory;
  return matchesSearch && matchesCategory;
});
```

## Test Cases

| #   | Search    | Category    | Expected           |
| --- | --------- | ----------- | ------------------ |
| 1   | `""`      | All         | All 5 products     |
| 2   | `"shoe"`  | All         | Shoes              |
| 3   | `""`      | Electronics | Laptop, Headphones |
| 4   | `"t"`     | Clothing    | T-shirt            |
| 5   | `"phone"` | Clothing    | No products found  |

## Setup

```bash
npx create-react-app product-store
# Replace src/ with these files
npm start
```
