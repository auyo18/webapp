import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {observer, inject} from "mobx-react"

@inject('appState') @observer

class Header extends Component {
  render() {
    return (
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/topic'>TopicList</Link>
          </li>
        </ul>
    )
  }
}

export default Header
