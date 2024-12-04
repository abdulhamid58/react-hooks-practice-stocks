import React, { useState } from "react";

function SearchBar({ onSort, onFilter }) {
  const [sortOption, setSortOption] = useState("");
  
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);
    onSort(selectedSort);
  };

  const handleFilterChange = (event) => {
    onFilter(event);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
