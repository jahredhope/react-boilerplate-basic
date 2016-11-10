
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from 'App'
import Layout from 'container/Layout'
import reducer from './reducers'

let store = createStore(reducer)

let rootElement = document.getElementById('root')

render(
    <AppContainer>
      <Provider store={store}>
        <Layout />
      </Provider>
    </AppContainer>,
      rootElement
)

if (module.hot) {
  module.hot.accept('container/Layout', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('container/Layout').default
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    )
  })
}
