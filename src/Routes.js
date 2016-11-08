import React from 'react'
import { Router, Route, IndexRedirect, browserHistory} from 'react-router'
import { appName } from './settings'

import Layout from 'container/Layout'

import IndexPage from 'container/IndexPage'
import AboutPage from 'container/AboutPage'

import NoMatch from 'container/NoMatch'

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route name={appName} path="/" component={Layout}>
        <IndexRedirect to="/home" />
        <Route name="Home" path="/home" component={IndexPage} />
        <Route name="About" path="/about" component={AboutPage} />
        <Route name="Page Not Found" path="*" component={NoMatch} />
      </Route>
    </Router>
  )

}
