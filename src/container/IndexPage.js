import React from 'react';
import cn from 'classnames'

import Button from 'component/Button'
import Table from 'component/Table'
import styles from './IndexPage.css'

const IndexPage = () => (
      <section className={styles.container}>
        <h1 className={styles.title}>Index Page</h1>
        <Button className={cn(styles.item)}>Create</Button>
        <Table columns={[{key: 'item', name: 'Item'}, {key: 'price', name: 'Cost'}]} rows={[
          {item: 'Bing', price: '$5 mil'},
          {item: 'Google', price: '$6 mil'},
          {item: 'Yahoo', price: '$3 mil'}
        ]} />
      </section>
    );

export default IndexPage
