import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./Products";
import Filters from "./Filters";

// TODO This should ideally come from environment variables
const localProductsUrl = "http://localhost:9001/products";

const toFilterUrl = (filterValue) =>
  filterValue ? `${localProductsUrl}?filter=${filterValue}` : localProductsUrl;

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const updateFilter = (newValue) => {
    console.log("newValue", newValue);
    setFilterValue(newValue);
  };

  useEffect(() => {
    console.log("useEffect() :: filterValue ->, ", filterValue);
    const url = toFilterUrl(filterValue);
    console.log("url", url);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log("res", response);
        setProducts(response);
      })
      .catch(console.error);
  }, [filterValue]);

  return (
    <div className='app'>
      <div className='App-row'>
        <Filters updateFilter={updateFilter} />
      </div>
      <div className='App-row'>
        <Products products={products} />
      </div>
    </div>
  );
};

export default App;
