import React, { Component, PropTypes} from 'react'
import {BrowserRouter, Match, Miss } from 'react-router'
import { connect } from 'react-redux'

import Header from 'component/Header'
import NavMenu from 'component/NavMenu'
import Footer from 'component/Footer'

import IndexPage from 'container/IndexPage'
import AboutPage from 'container/AboutPage'
import NoMatch from 'container/NoMatch'

import styles from './Layout.css'

class Layout extends Component {
  render() {
    const {routes} = this.props
    console.log('Layout', 'this.props', this.props)
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Header routes={routes} />
          <NavMenu />
          <Match exactly pattern="/" component={IndexPage} />
          <Match name="Home" pattern="/home" component={IndexPage} />
          <Match name="About" pattern="/about" component={AboutPage} />
          <Miss component={NoMatch}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.object,
  routes: PropTypes.array
}

export default connect((state) => (state))(Layout)
