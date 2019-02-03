import React, { Component } from 'react'
import Tag from './Tag'
import { getCategoryFromId } from '../helper'

class Item extends Component {
  
  render() {
    const {
      item: {
        title,
        content,
        category: categoryId
      },
      categories
    } = this.props
    
    const categoryData = getCategoryFromId(categoryId, categories)
    
    return(
      <div className="Item">
        <img src="/images/itemImageDefault.svg" alt="Default Item" />
        <div className="Item__Wrapper">
          <div className="Item__Header">
            <div className="Item__Title">{ title }</div>
            <Tag context="view" category={ categoryData } />
          </div>
          <div className="Item__Content">{ content }</div>
          <div className="Item__More">
            <img className="Icon" src="/images/arrow18x18.svg" alt="Default Item" />
            <div>More info</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
