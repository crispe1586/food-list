import { setItems, setCategories, filterItems } from './redux/actions'
import { connect } from 'react-redux'
import Container from './containers/Container'

function mapStateToProps (state) {
  return { ...state }
}
function mapDispatchToProps (dispatch) {
  return {
    filterItems: (field, value) => dispatch(filterItems(field, value)),
    setItems: (items) => dispatch(setItems(items)),
    setCategories: (categories) => dispatch(setCategories(categories))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container)
export default App
