# React Scaffold

This is a React based project which helps you to start quickly your own new React Project.

It is integrate with the newest libraries like:

- Redux
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

There is a small implementation inside of it that can helps you with:

- To imrpove the architecture of your project
- To test you project with Jest and Enzyme
- To perform your project using dynamic imports
- To see pratical exemples of The new react hooks feature
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
