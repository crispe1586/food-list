export function setItems (items) {
  return {
    type: 'SET_ITEMS',
    payload: {
      items: items,
      filteredItems: items
    }
  }
}

export function setCategories (categories) {
  return {
    type: 'SET_CATEGORIES',
    payload: {
      categories: categories
    }
  }
}

export function filterItems (field, value) {
  return {
    type: 'FILTER_ITEMS',
    field: field,
    value: value
  }
}