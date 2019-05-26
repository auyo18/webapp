import React, {Component} from 'react'
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import {AppState} from "../../store/store"

@inject('appState') @observer

class TopicList extends Component {
  changeName = e => {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
        <div>
          <p>this is TopicList!!
            <input type="text" onChange={this.changeName} />
            <span>{this.props.appState.msg}</span>
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

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default TopicList
