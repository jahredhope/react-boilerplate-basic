import React, {PropTypes} from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'

import currencyFormat from 'currencyFormat'

import { increase, decrease } from 'modules/counter'

import Button from 'component/Button'
import Select from 'component/Select'
import Section from 'component/Section'
import Table from 'component/Table'
import HorizontalContainer from 'component/HorizontalContainer'

import styles from './IndexPage.css'

const columns = [
  {key: 'item', name: 'Item'},
  {key: 'price', name: 'Cost'}
]

const data = [
  {item: 'Bing', price: '$5 mil'},
  {item: 'Google', price: '$6 mil'},
  {item: 'Yahoo', price: '$3 mil'}
]

const IndexPage = ({increase, decrease, counter}) => (
  <div className={styles.container}>
    <Section>
      <h1 className={styles.title}>Index Page</h1>
      <HorizontalContainer>
        <Button className={cn(styles.item)}>Create</Button>
        <Select options={[{value: 1, name: 'boo'}, {value: 3, name: 'hoo'}]} />
      </HorizontalContainer>
      <Table columns={columns} rows={data} />
    </Section>
    <Section>
      <HorizontalContainer>
        <div>{currencyFormat(counter)}</div>
      </HorizontalContainer>
      <HorizontalContainer>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </HorizontalContainer>
    </Section>
  </div>
    )

IndexPage.propTypes = {
  counter: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
}

export default connect(({counter}) => ({counter}), {increase, decrease})(IndexPage)
