# Introduction

This is a [React](https://github.com/facebook/react) project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page(ETELAB) which is connected to private API server and share data. 

`CORS`

demo web page port = 4000

API server port = 3000

You first get the data from the API server for the input form in the demo web page, 

then, send a packet to the API server by using the form in the demo web page.

and then, get the requested data from the API server,

show the result under the form in the demo web page.

`Axios` enables you to get and send the data from and to the API server through the demo web page.

`MUI` is used for form UI.

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, run the development server with the command below :

```bash
npm start
```

and those under are for different use (but we do not need those for now) :

```bash
npm run test # Launches the test runner in the interactive watch mode #

npm run build # Builds the app for production to the build folder #

npm run eject # Remove the single build dependency from your project #

```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

Though you access, multiple error will be detected.

This is because API server (port 3000) is currently not working due to 

Maria DB, which is the database for the api server is no longer usable. 

The demo page will return 500 error.

Need to find a solution for this issue.

## About the source

- `src/minorCompoents/BasicButton.js` : Button component for `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

This component gets parameter from `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

- `src/minorCompoents/BasicSelect.js` : Select Input component for `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

This component gets parameter from `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

- `src/MajorCompoents/LabYearMonthSelectAndButton.js` : Component that uses both Button component and Select Input component.

This component defines functions with `useState`, `useEffect`, `axios`.

returns parameters and values to  both Button component and Select Input component.

All the components' file extension is .js

This is because .jsx is compatible with .js for jsx grammar is based on javascript.

You can convert .js sources' file extension into .jsx to clearify this is a React project.

## Goal

The goal of this project was `To apply UI library(MUI) into the React project and share data with an API server which is pre-loaded`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
