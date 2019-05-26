import React, {Component} from 'react'
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {AppState} from '../../store/store'

@inject('appState') @observer

class Home extends Component {
  changeName = e => {
    this.props.appState.changeName(e.target.value)
  }

  componentDidMount() {
    !this.props.appState.homeArticleList.length && this._getArticleList() && this._getSiteInfo()
  }

  render() {
    return (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.appState.siteInfo.siteInfo.subtitle}</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <p>this is Home!!
            <input type="text" onChange={this.changeName} />
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

  _getSiteInfo = async () => {
    await this.props.appState.setSiteInfo()
  }

  _getArticleList = async () => {
    await this.props.appState.setArticleList()
  }
}

Home.loadData =async store => {
  await store.setSiteInfo()
  await store.setArticleList()
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default Home
