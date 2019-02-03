function reducer (state, action) {
  if (state === undefined) {
    return {
      categories: null,
      items: null,
      filteredItems: null,
      filter: {
        categories: {
          "1": false,
          "2": false,
          "3": false,
        }
      }
    }
  }

  switch (action.type) {
    case 'SET_ITEMS': {
      const { items, filteredItems } = action.payload
      return {
        ...state,
        items: items,
        filteredItems: filteredItems
      }
    }
    case 'SET_CATEGORIES': {
      const { categories } = action.payload
      return {
        ...state,
        categories: categories
      }
    }
    case 'FILTER_ITEMS': {
      const {
        items,
        filter: {
          categories
        }
      } = state
      const { field, value } = action
      const newCategories = Object.assign(categories, {[field] : value})
      let updatedItems = items
      
      // Get ids of active categories
      const selectedCategories = Object.keys(newCategories).filter(key => newCategories[key] === true)
      // Filter items by the categories selected
      if (selectedCategories.length !== 0) {
        updatedItems = updatedItems.filter((item) => {
          return selectedCategories.includes(item.category.toString())
        })
      }
      return {
        ...state,
        filteredItems: updatedItems,
        filter: {
          categories : newCategories
        }
      }
    }
    default:
      return state
  }
}

export default reducer
