# Distributed Programming FrontEnd Demo

React application that fetches a list of products from the backend and allows the creation and deletion of individual products.    
Products can be added to a persistent shopping cart and then an order can be sent containing the cart's contents.

## Getting started

1. To create a fresh react app with typescript go to: https://create-react-app.dev/docs/adding-typescript/
1. It is highly advisable to use a component library. This project uses Material UI: https://mui.com/getting-started/installation/, although there are other popular libraries as well (e.g. Bootstrap react components)    
To install the component library, you have to run `npm install @mui/material @mui/styled-engine-sc styled-components --legacy-peer-deps` if you're using react >=18)
1. Helpful guide on using State: https://reactjs.org/docs/hooks-state.html
1. Using hooks (esp. useEffect): https://reactjs.org/docs/hooks-effect.html
1. Defining and passing component props in React: https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
1. Connect the application to the backend services running at http://localhost:8080/ (Java) and http://localhost:8080/ (Node)
1. Sample images taken from: https://www.shutterstock.com/

## Running the application

Start and wait for the backend server to initialize.     
Run the following command:
```
npm start
```

In your browser, go to http://localhost:3000/ to view the UI

-------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
