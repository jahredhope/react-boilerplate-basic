import React, {PropTypes} from 'react';
import cn from 'classnames'

import styles from './Button.css'

const Button = ({type, children, className}) => (
      <button className={cn(styles.button, type && styles[`button-${type}`], className)} >
        {children}
      </button>
        );

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger']),
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Button
