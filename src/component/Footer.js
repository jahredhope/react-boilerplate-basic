import React, { Component } from 'react'
import cn from 'classnames'

import styles from './Footer.css'

export default class Footer extends Component {

  render() {
    return (
      <footer className={cn(styles.container)}>
        By Jahred Hope
      </footer>
    )
  }
}

Footer.propTypes = {}
