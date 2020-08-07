import React from "react";
import "./Filters.css";

const Filters = ({ categories, updateFilter }) => (
  <div className='Filters-row'>
    <label htmlFor='category-dropdown'>
      Select a category:
      <select
        id='category-dropdown'
        onChange={(event) => updateFilter(event.target.value)}
        // disabled={!!categories.length}
      >
        <option value=''>All Products</option>
        {Object.entries(categories).map(([name, count]) => (
          <option value={name}>
            {name} {count}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default Filters;
