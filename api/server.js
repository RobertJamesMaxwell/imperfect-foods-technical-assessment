const express = require("express");
const products = require("../src/products.json");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9001;

app.use(cors()); //TODO enable only in dev mode

app.get("/products", (req, res) => {
  const categoryFilter = req.query.filter;
  console.log("categoryFilter: ", categoryFilter);
  if (categoryFilter) {
    const filteredProducts = products.filter((product) =>
      // console.log("product.categories", product.categories);
      product.categories.some((category) => category.name === categoryFilter)
    );

    return res.json(filteredProducts);
  }
  return res.json(products);
});

app.listen(port, () => console.info(`App started, listening on ${port}`));

// make new endpoint and call to get all possible categories and load that as dropdown!
// save the count in there somewhere?

// const categoriesSet = new Set();

//   products.forEach((product) => {
//     product.categories.forEach((category) => {
//       categoriesSet.add(category.name);
//     });
//   });
//   console.log(categoriesSet);

// Set {
//   'Produce',
//   'Fruit',
//   'Vegetables',
//   'Non-Produce',
//   'Dried Fruit & Nuts',
//   'Beverages',
//   'Breakfast',
//   'Bakery',
//   'Oils, Condiments, Spices and Spreads',
//   'Soups/Stocks',
//   'Dried Pantry Staples',
//   'Prepared Foods & Kits',
//   'Canned/Pickled Foods',
//   'Salty Snacks',
//   'Sweet Snacks',
//   'Bars',
//   'Baking'
// }
