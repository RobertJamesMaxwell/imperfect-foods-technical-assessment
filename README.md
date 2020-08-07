# Imperfect Foods Technical Assessment

## Description

Thanks for taking the time to review my technical assessment! I chose to implement the 'Category Shelves' functionality from Option 2 in the assessment doc. A summary of the added functionality:

1. Products are loaded in the frontend from a network call instead of the local json file. The server serves the products from the products.json file.
1. Product categories, along with how many products are in each category, are calculated based on the products.json file and served to the frontend to populate the categories dropdown.
1. When a user selects a filter value from the category dropdown, a network call is sent to the server. The server then filters the products based on this value and serves back the filtered products

## Considerations and thoughts for future enhancements

Given the time constraints of this assessment and the instructions to focus on data manipulation and asynchronous logic, there's many features which I considered, but chose not to address at the moment. Given more time and/or the goal of taking this app from project/proof-of-concept to a production-ready, many of these considerations would likely be addressed.

1. Add loading state for network calls. Add a spinner or some other loading indicator to the user.
1. Add error state for failed network calls.
1. Add the filter query param to the URL so a user could refresh the page and keep the filter
1. Add pagination. Right now the 'All Products' filter loads all 247 products, which seems high for one network call. Paging could be added as a query param to network calls.
1. Add a sorting dropdown. Allows users to sort products alphabetically in an ascending/descending manner. Could also be added as a query param to network calls.
1. Abstract out the global state, which is all currently held in the App component. This could be pulled out to a Context and then each component could pull in what it needs. As the app and state grows, there could be a case to add a dependency like redux for state management.
1. CSS Bug: When a user filter's by 'Dried Fruit & Nuts' the image of the one card that returns is cut off. Based on the instructions CSS adjustments seemed out of scope at the moment.
1. Other long term feature enhancements / team topic discussions:

   - Testing: Overall strategy, dependencies, etc
   - File Structure: Agreed upon patterns both for app and server
   - Typing: Introduce PropTypes dependency or maybe Typescript
   - Database: Everything is loaded from a json file right now, so some of the filtering and sorting currently implemented in the server could potentially be handled in a database query, depending on database choice. The api implementation would also be affected if, for example, the product categories were their own table in a relational database and referenced by a foreign key in the products table.

## Running the project

From the root project directory:
(note: npm can be used instead of yarn if desired)

```sh
# Step 1: Install dependencies. The npm 'cors' package was added from the base project as a dev dependency. This is necessary for local development so the frontend react app and the backend node express server won't be blocked by CORS (Cross Origin Resource Sharing)
$ yarn install

# Step 2: Start the server. Runs on PORT 9001 by default
$ node api/server.js

# Step 3: Start the app. Runs on PORT 3000 by default
$ yarn start
```

---

# Below is original Readme from project clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running

We added a separate express API to serve products to the client app. To run that prior to kicking
off the webpack dev server running the react app:

```sh
# Run on a later version of node
# Runs on PORT 9001 by default, but can set the PORT env variable to run on a different port
$ node api/server.js
```

Then, move on to running the client below...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
