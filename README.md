# Introduction

This is a [React](https://github.com/facebook/react) project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page(ETELAB) which is connected to private API server and share data. 

`CORS`

demo web page port = 3000

API server port = 4000

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

Congratulations! you can now see the view of this project! 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
