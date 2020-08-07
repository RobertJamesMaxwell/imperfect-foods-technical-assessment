const products = require("./products.json");

/**
 * Calculates the unique product categories and the number of items in that category.
 *
 * Based off of the products.json file as a local 'database' and source of truth.
 *
 * @returns An object of shape:
 *  {
 *    categoryNameOne: count,
 *    categoryNameTwo: count,
 *    categoryNameThree: count
 *  }
 */
const getCategories = () => {
  const categoriesObject = {};
  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (categoriesObject[category.name] === undefined) {
        categoriesObject[category.name] = 1;
      } else {
        categoriesObject[category.name] = categoriesObject[category.name] + 1;
      }
    });
  });
  return alphabeticallySortObjectByKeys(categoriesObject);
};

/**
 * Alphabetically sorts an object by its keys
 *
 * @param unsortedObject A object to sort by keys. ie) {b: bVal, c: cVal, a: aVal}
 * @returns A new object sorted by keys. ie) {a: aVal, b: bVal, c: cVal}
 *
 * TODO: This could be extended to pass in a sorting function. Could also be pulled into a helper/util file for ease of use in other places.
 */
const alphabeticallySortObjectByKeys = (unsortedObject) => {
  const keySortedObject = {};
  Object.keys(unsortedObject)
    .sort()
    .forEach((key) => {
      keySortedObject[key] = unsortedObject[key];
    });
  return keySortedObject;
};

module.exports = {
  getCategories,
};
