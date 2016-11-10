import React   from 'react'
import cn from 'classnames'
import { Link } from 'react-router'

import styles from './NavMenu.css'

const NavMenu = () => (
  <nav className={cn(styles.container)}>
    <Link className={styles.item} activeClassName={styles.active} to="/home">Home</Link>
    <Link className={styles.item} activeClassName={styles.active} to="/about">About</Link>
    <Link className={styles.item} activeClassName={styles.active} to="/thing">Thing</Link>
  </nav>
)

NavMenu.propTypes = {
}

export default NavMenu
