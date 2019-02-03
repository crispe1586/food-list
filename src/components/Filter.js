import React, { Component } from 'react'
import Tag from './Tag'

class Filter extends Component {
  
  render() {
    const {
      categories
    } = this.props
    
    return(
      <div className="Filter">
        <span className="Filter__Label">Filter:</span>
        <div className="Filter__Wrapper">
          {categories.map((category) =>
              <Tag key={ category.id } context="edit" category={ category } { ...this.props }  />
          )}
        </div>
      </div>
  )
  }
}

export default Filter
