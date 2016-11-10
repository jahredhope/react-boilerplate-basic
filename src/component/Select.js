import React, {PropTypes} from 'react'
import cn from 'classnames'

import styles from './Select.css'

const Select = ({options}) => (
  <select className={cn(styles.container, styles.dropdown)} >
    {options.map(({name, value}, index) => <option key={index} value={value}>{name}</option>)}
  </select>
)

Select.propTypes = {
  options: PropTypes.array.isRequired
}

export default Select
