import React, { Component } from 'react'
import styleVars from '../scss/_vars.scss'

class Tag extends Component {
  
  handleCategorySelection = (e) => {
    const {
      id: field,
      checked: value
    } = e.target
    this.props.filterItems(field, value)
  }
  render() {
    const {
      category,
      context
    } = this.props
    const categoryStyle = {
      backgroundColor: styleVars[`colorCategory${category.id}`]
    }
    
    return(
      <div className="Tag" style={ categoryStyle }>
        { context === "edit" &&
          <input type="checkbox" id={ category.id } onClick={ this.handleCategorySelection } />
        }
        { category.name}
      </div>
    )
  }
  
}

export default Tag
