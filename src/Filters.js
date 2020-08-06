import React from "react";
import "./Filters.css";

const Filters = ({ updateFilter }) => (
  <div className='Filters-row'>
    <select onChange={(event) => updateFilter(event.target.value)}>
      <option value=''>All Products</option>
      <option value='Robert'>Robert</option>
      <option value='Fruit'>Fruit</option>
    </select>
  </div>
);

export default Filters;
