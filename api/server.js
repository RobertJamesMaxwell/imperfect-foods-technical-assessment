const express = require("express");
const products = require("../src/products.json");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9001;

app.use(cors()); //TODO enable only in dev mode

app.get("/products", (req, res) => {
  return res.json(products);
});

app.listen(port, () => console.info(`App started, listening on ${port}`));
