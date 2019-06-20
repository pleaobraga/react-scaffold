# React Scaffold

This is a React based project, builded from the scratch by me, which helps you to start quickly your own new React Project.

It is integrate with the newest libraries like:

- Redux
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

There is a small implementation inside of it that can helps you with:

- To improve the architecture of your project
- To test you project with Jest and Enzyme
- To perform your project using dynamic imports
- To see pratical exemples of **the new react hooks feature**
- To see some implementation of the new react-redux features like useSelector and useDispatch
- To document you project with storybook
- To writte better your code using Prettier and ESlint

# Quick Start

## Installing dependencies

Clone this project inside your project folder then navigate to inside of it and use

```
npm i
```

in your terminal to installall dependencies

## Starting the project

To start the project use this command in your terminal

```
npm start
```

wait for few seconds and the project will open a nwe tab in your browser automatically

### Changing default port

the default port is 8080 but if you want to change it to the port 3000 use this command

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

This command executes the jest and test all **.test.js** files in your project

### Watch Tests in the project

```
npm run test:watch
```

This command executes the jest watchAll and watch all your tests

### Update snapshots

```
npm run test:update
```

This command executes update all snapshots

### Check the coverage

```
npm run test:coverage
```

This command executes jest coverage and check the coverage of your tests

## Using Storybok

To start the storybook use the command:

```
npm run storybook
```

after that a ner web page will open with the storybook running on the port 9000

### Addons

This storybook is already configurated with some addons like Knobs, Actions, and info

### Creat a new storie

To create a new storie you create the file {yourComponent}.stories.js

export the storie and import it on **./.storybook/index.stories.js**

You can check the this **./.storybook/index.stories.js** filr and other example on the project to undestand better the process

### Creat a new storie with redux

Check the **src/pages/ContentPage/ContentPage.stories.js** to see how to use the redux with storybook

## Commits

This project uses Husk.js and everytime you push the code it will run the pre-commit tesk to check the lint and run all tests, **so the code will only be pushed if its respects the lint rules and has not any test error**

## Project Architecture

The project achitechture is page based, and usin SOLID principles and the source folder is like:

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

The architecture for the js files is like fallow the example

```
components
  Component
    index.js
    Component.test.js
    Component.storie.js (what makes sense)
    Component.scss (what makes sense)
    Component.jsx
```

So each component has its on test, storie, jsx file and a index to export all of it.

This architechture is easy to mantain because to fix a component you can go in its folder and change ereything from it.

### Reducers

For this example I did not split the reducer from the action creators because this project is too small, but if the project increase so slit reducer from actions.

### Utils

In the utils folder I keep some functions and the contants files

## Dynamic Import and Performance

Nowadays we need to pay attention on performace, if we do not take care of it your project wold work but slowly and the client expetrience become very frustated.

I created in ths project a component called DynamicImport, it is integrate with the webpack so you can create diferent bundles with it and import them dynamically so you only will import the correct bundle for that page.

It is applyed on the **routes.js** file, so each page you import will automaticaly create a new bandle performaticly bundle.

Check on the routes file how to use it and check the DynamicImport component to see how it works

This component is better than **React.lazy** because it can handle 3 diferents situation:

- Loading
- Error
- Component

diferent from **React.lazy** and **React.Suspense** which could only handle:

- Loading
- Component

## Vendors

The webpack is configurated to create a vendors file with common libraries like react, redux ...
