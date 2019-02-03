import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return(
      <div className="Menu">
        <a className="Menu__Link active" href="#">Menu item 1</a>
        <a className="Menu__Link" href="#">Menu item 2</a>
        <a className="Menu__Link" href="#">Menu item 3</a>
        <a className="Menu__Link" href="#">Menu item 4</a>
        <a className="Menu__Link" href="#">Menu item 5</a>
        <a className="Menu__Link" href="#">Menu item 6</a>
      </div>
  )
  }
}
export default  Menu
