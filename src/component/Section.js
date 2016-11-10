import React, {PropTypes} from 'react'
import cn from 'classnames'

import styles from './Section.css'

const Section = ({children, className, ...rest}) => (
  <section className={cn(styles.container, className)} {...rest}>
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Section
