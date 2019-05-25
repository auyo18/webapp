import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import {AppState} from "../../store"

@inject('appState') @observer

class Home extends Component {
  render() {
    return (
        <div>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
          </li>
          <p>this is Home!!{this.props.appState.msg}</p>
          <button onClick={() => {
            alert(123)
          }}>
            click
          </button>
        </div>
    )
  }
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired
}

export default Home
