# react-boilerplate-basic

## To Run
    npm install
    npm start

    Navigate to localhost:3000

## What is [insert term here]?
  * [React](https://github.com/facebook/react)
  * [React Router](https://github.com/rackt/react-router)
  * [Babel](http://babeljs.io) for ES6 and ES7 magic
  * [Webpack](http://webpack.github.io) for bundling
  * [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
  * [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
  * [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation

#### Redux Modules... *What the Duck*?

The `src/redux/modules` folder contains "modules" to help
isolate concerns within a Redux application (aka [Ducks](https://github.com/erikras/ducks-modular-redux), a Redux Style Proposal that I came up with). I encourage you to read the
[Ducks Docs](https://github.com/erikras/ducks-modular-redux) and provide feedback.


## Coding Guide

### CSS Variables
Use two levels abstraction where possible.

First define the variable  
E.g. `--light-green: #33ee55`

Then define it's use  
E.g. `--title-color: var(--light-green)`

This allows slight adjusting of the colour palette seperate to adjusting which colours are used where.

### Margins and layout
Where possible
Containers should have top, left, right padding.  
Items in containers should specify bottom margin.  

### Images
The image loader uses base64 encoded strings.  
This is deliberate.

# Testing

### Jest
Connected components should export both their decorated component as the default and their non-decorated component as their name.  

See [Redux Docs/connected components](http://redux.js.org/docs/recipes/WritingTests.html#connected-components) on why this is recommended  


#### Mocks
Mocks for Styles export the parameter used with 'mock-style-' at the start.
Mocks for Files export the simple string 'test-file-stub'
