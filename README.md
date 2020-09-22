# React Scaffold

This is a React based project, which I built from scratch, that helps you to start quickly your own new React Project.

It is integrated with the newest libraries such as:

- Redux
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

There is a small implementation which can helps you to:

- Improve the architecture of your project
- Test you project with Jest and Enzyme
- Increase the performance of your project using dynamic imports
- See practical examples of the new \***\*React Hooks feature**
- See some implementation of the new React-redux features like useSelector and useDispatch
- Document your project with Storybook
- Improve your code using Prettier and ESlint

# Quick Start

## Installing dependencies

```
npm i
```


## Starting the project

To start the project use this command in your terminal and wait for a few seconds and the project will open a new tab in your browser automatically

```
npm start
```


### Changing default port

The default port is 8080 but if you want to change it to the port 3000 use this command

```
npm start -- --port=3000
```

## Build the project

```
npm run build
```

## Testing the project

There are some commands to test the project

### Test all project

```
npm run test
```

### Watch Tests in the project

```
npm run test:watch
```

### Update snapshots

```
npm run test:update
```


### Check the coverage

```
npm run test:coverage
```

## Using Storybok

To start the Storybook use the command, it will open a new webpage with Storybook running on port 9000

```
npm run storybook
```


### Addons

The storybook is already configured with some addons like Knobs, Actions, and Info.

### Create a new story

To create a new story, create a file {yourComponent}.stories.js
Export the story and import it to **./.storybook/index.stories.js**
You can check this file **./.storybook/index.stories.js** and other examples in the project to better understand the process.

### Create a new story with Redux

Check the **src/pages/ContentPage/ContentPage.stories.js** to see how to use the Redux with Storybook

## Commits

This project uses Husk.js and everytime you push the code it will run the pre-commit task to check the lint and run all tests, **so the code will only be pushed if it follows the lint rules and does not have any test errors.**

## Project Architecture

The project uses SOLID principles and base page architecture. 
The Source folder is:

```
src
  components
  pages
  reducers
  utils
  routes.js
  index
```

### Components Pages

The architecture for the components is:

```
components
  Component
    index.js
    Component.test.js
    Component.storie.js (what makes sense)
    Component.scss (what makes sense)
    Component.jsx
```

So each component has its own tests, stories, jsx file and a index to export what is necessary.

This architechture is easy to mantain because to fix a component you can go in its folder and change everything of it.

### Reducers

For this example I did not split the reducer from the action creators because this project is too small, but if the project increase it's better split reducer from its actions.

### Utils

In the utils folder I keep some functions and the constants files

## Dynamic Import and Performance

Nowadays we need to pay attention on performace, if we do not take care of it, your project would work but slowly and the customer experience will be very frustrating.

I created in ths project a component called **DynamicImport**, it is integrated with the webpack what is does is basically import the bundle of the content only when the component is rendered in the page.

It is apply on the **routes.js** file, so each page that you import will automaticaly create a new optimal bundle.

This is a example how to use the DynamicImports

```
const WelcomePage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)
```

This component is better than **React.lazy** because it can handle 3 diferent situations:

- Loading
- Error
- Component

diferent from **React.lazy** and **React.Suspense** which could only handle:

- Loading
- Component

## Vendors

The webpack is configurated to create a vendors file with common libraries like react, redux ...
