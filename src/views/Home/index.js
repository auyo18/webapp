import React, {Component} from 'react'
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import AppState from '../../store/appState'

@inject('appState') @observer

class Home extends Component {
  changeName = e => {
    this.props.appState.changeName(e.target.value)
  }

  componentDidMount() {
    !this.props.appState.homeArticleList.length && this._getArticleList()
  }

  render() {
    return (
        <div>
          <p>this is Home!!
            <input type="text" onChange={this.changeName}/>
            <span>{this.props.appState.msg}</span>
          </p>
          <button onClick={() => {
            alert(123)
          }}>
            click
          </button>
          {
            this.props.appState.homeArticleList.map(item => <p key={item._id}>{item.title}</p>)
          }
        </div>
    )
  }

  _getArticleList = async () => {
    await this.props.appState.setArticleList()
  }
}

Home.loadData = async store => {
  return store.setArticleList()
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default Home
