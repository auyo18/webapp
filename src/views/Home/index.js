import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import {AppState} from "../../store/store"

@inject('appState') @observer

class Home extends Component {
  changeName = e => {
    this.props.appState.appState.changeName(e.target.value)
  }

  render() {
    console.log(this.props)
    return (
        <div>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
          </li>
          <p>this is Home!!
            <input type="text" onChange={this.changeName} />
            <span>{this.props.appState.appState.msg}</span>
          </p>
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
  appState: PropTypes.instanceOf(AppState)
}

export default Home
