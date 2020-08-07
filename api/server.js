const express = require("express");
const cors = require("cors");
const products = require("./data/products.json");
const categoriesData = require("./data/categories");

const app = express();
const port = process.env.PORT || 9001;

//TODO Enable only for develop/local environment based off of an environment variable
app.use(cors());

// Calculates the unique categories based on the products. Since this process is computationally expensive, it is done once on app start up, instead of inside of the endpoint which would run as each request is served
const categories = categoriesData.getCategories();

/**
 * Endpoint to get all the unique product categories along with number of products in each category
 */
app.get("/categories", (req, res) => {
  return res.json(categories);
});

/**
 * Endpoint to get all products
 * Filters products by category based on the query param 'filter'
 */
app.get("/products", (req, res) => {
  const categoryFilter = req.query.filter;
  if (categoryFilter) {
    const filteredProducts = products.filter((product) =>
      product.categories.some((category) => category.name === categoryFilter)
    );
    return res.json(filteredProducts);
  }
  return res.json(products);
});

app.listen(port, () => console.info(`App started, listening on ${port}`));
