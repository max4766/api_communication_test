# Introduction

This is a [React](https://github.com/facebook/react) project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page(ETELAB) that gets data which is required for input components from an API server.

In this porject, `json-server` is used to make a fake server.

`Axios` enables you to get data from the API Server(localhost:3000) for the web page(localhost:4000).

`MUI` is used for input form UI.

It is possible to check if the value for the packet is correctly set and ready 

by an alert showing out after clicking search button.

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

It is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, Install json-server globally. If you already have it in your local, you don't need to.

Here is the command :

```bash
npm i -g json-server
```

Next, run the API server with the command below :

```bash
json-server --watch src/fakeServer/db.json
```

You can now check localhost:3000 is used as an API server after running the command above.

Next, run the development server with the command below :

```bash
npm start
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

Congratulation! You can finally see the view of this project!

## About the source

- `src/minorCompoents/BasicButton.js` : `MUI` Button component for `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

This component gets parameter from `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

- `src/minorCompoents/BasicSelect.js` : `MUI` Select Input component for `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

This component gets parameter from `src/MajorCompoents/LabYearMonthSelectAndButton.js`.

- `src/MajorCompoents/LabYearMonthSelectAndButton.js` : The Component that uses both Button component and Select Input component.

This component defines functions with `useState`, `useEffect`, `axios`.

And it returns parameters and values to both Button component and Select Input component.

For  your record, all the components' file extension is .js

This is because .jsx is compatible with .js for jsx grammar is based on javascript.

You can convert .js sources' file extension into .jsx to clearify this is a React project.

## Goal

The goal of this project was `To use an API server and get data to prove components can be reused`.

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
