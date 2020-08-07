import React from "react";
import "./Filters.css";

/**
 * Filter dropdown component
 *
 * Takes in categories as a prop, which is an object where the object keys are the product categories (sorted alphabetically) and the object values are the number of products in that category:
 *  {
 *    Fruit: 10,
 *    Vegetables: 31,
 *    Beverages: 15,
 *  }
 *
 * Takes in updateFilter as a prop, which is a function to update the state of the filter in the parent/App component when a user selects from the dropdown
 *
 * TODO: Type the props via PropTypes or Typescript
 */
const Filters = ({ categories, updateFilter }) => (
  <div className='Filters-row'>
    <label htmlFor='category-dropdown'>
      Select a category:
      <select
        id='category-dropdown'
        onChange={(event) => updateFilter(event.target.value)}
      >
        <option value=''>All Products</option>
        {Object.entries(categories).map(([name, count]) => (
          <option key={name} value={name}>
            {name} {count}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default Filters;
