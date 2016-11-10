import React, { PropTypes } from 'react'
import cn from 'classnames'

import styles from './HorizontalContainer.css'

const HorizontalContainer = ({children}) => (
      <div className={cn(styles.container)}>
        {children}
      </div>
    )
HorizontalContainer.propTypes = {
  children: PropTypes.any
}

export default HorizontalContainer
