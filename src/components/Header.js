import React, { Component } from 'react'
import Menu from './Menu'

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Wrapper">
          <div className="Title">Brandname</div>
          <Menu />
        </div>
      </div>
    )
  }
}

export default  Header
