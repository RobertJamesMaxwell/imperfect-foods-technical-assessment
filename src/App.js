import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./Products";
import Filters from "./Filters";

// TODO This should ideally come from environment variables
const localProductsUrl = "http://localhost:9001/products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(localProductsUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log("res", response);
        setProducts(response);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='app'>
      <div className='App-row'>
        <Filters />
      </div>
      <div className='App-row'>
        <Products products={products} />
      </div>
    </div>
  );
};

export default App;
