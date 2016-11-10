import React, {PropTypes} from 'react'
// import cn from 'classnames'

import styles from './Table.css'

const Table = ({columns, rows}) => (
  <table className={styles.container}>
    <thead>
      <tr>
        {columns.map((column, index) => <th key={index}>{column.name}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => <tr key={index}>
        {columns.map((column, index) => <td key={index}>{row[column.key]}</td>)}
      </tr>)}
    </tbody>
  </table>
)

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
}

export default Table
