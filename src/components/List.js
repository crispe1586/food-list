import React from 'react'
import Item from './Item'

const List = ({ items, categories }) => (
  <div className="List">
    {!items.length && 'No items match this criteria'}
    {items.map(item =>
      <Item key={ item.id } item={ item } categories={ categories } />
    )}
  </div>
)

export default  List
