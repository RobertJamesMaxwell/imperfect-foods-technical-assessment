import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./Products";
import Filters from "./Filters";
import routes from "./routes";

/**
 * Adds value from the categories filter dropdown to the products URL string as a query paramenter
 *
 * @param filterValue A string that is the value of the filter
 * @returns The products URL string with a filter appended as a query param if there is one
 *
 * TODO: This could be enhanced by making the URL a parameter instead of hardcoding it for PRODUCTS_URL only. Could also be pulled into a helper/util file for ease of use of adding query params in other places. Could be extended to handle multiple query params instead of just one, if that use case became necessary
 */
const toFilterUrl = (filterValue) =>
  filterValue
    ? `${routes.PRODUCTS_URL}?filter=${encodeURIComponent(filterValue)}`
    : routes.PRODUCTS_URL;

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const updateFilter = (newValue) => {
    setFilterValue(newValue);
  };

  // Fetches the products from the server, based on the filter value
  useEffect(() => {
    fetch(toFilterUrl(filterValue))
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch(console.error);
  }, [filterValue]);

  // Fetches all of the category options from the server upon page load to populate the category filter dropdown
  useEffect(() => {
    fetch(routes.CATEGORIES_URL)
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='app'>
      <div className='App-row'>
        <Filters categories={categories} updateFilter={updateFilter} />
      </div>
      <div className='App-row'>
        <Products products={products} />
      </div>
    </div>
  );
};

export default App;
