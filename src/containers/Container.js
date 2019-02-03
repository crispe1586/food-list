import React, { Component } from 'react'
import '../scss/App.scss'
import Header from '../components/Header'
import Filter from '../components/Filter'
import List from '../components/List'
import Loader from '../components/Loader'
import categoriesData from '../helper/categoriesData.json'
import itemsData from '../helper/itemsData.json'

class Container extends Component {

  componentDidMount () {
    const { setItems, setCategories } = this.props
    setItems(itemsData)
    setCategories(categoriesData)
  }
  render () {
    const {
      items,
      filteredItems,
      filter,
      categories,
      filterItems
    } = this.props

    if (!items) {
      return <Loader />
    }

    return (
      <div className="Container">
        <Header />
        <div className="Content">
          <Filter
            { ...filter }
            categories={ categories }
            items={ items }
            filteredItems={ filteredItems }
            filterItems={ filterItems } />
          <List
          categories={ categories }
          items={ filteredItems } />
        </div>
      </div>
    )
  }

}

export default Container
