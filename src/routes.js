// TODO: Move base server URLs into an environment variable
const localServer = "http://localhost:9001";
const routes = {
  PRODUCTS_URL: `${localServer}/products`,
  CATEGORIES_URL: `${localServer}/categories`,
};
export default routes;
