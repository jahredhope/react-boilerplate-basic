import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs'
// import { Link } from 'react-router'

import bananaImage from './bananas.png'
// import {appName} from 'settings'

import styles from './Header.css'

export default class Header extends Component {
  render() {
    const {props} = this;
    return (
        <header className={styles.container}>
          <img className={styles.icon} src={bananaImage} height="50"/>
          {props.routes && <Breadcrumbs  routes={props.routes} params={props.params}/>}
        </header>
    );
  }
}

Header.propTypes = {};
