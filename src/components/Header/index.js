import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {observer, inject} from "mobx-react"
import {Helmet} from 'react-helmet'

@inject('appState') @observer

class Header extends Component {
  componentDidMount() {
    !this.props.appState.siteInfo.siteInfo && this._getSiteInfo()
  }

  render() {
    return (
        <ul>
          <Helmet>
            <title>{this.props.appState.siteInfo.siteInfo && this.props.appState.siteInfo.siteInfo.subtitle}</title>
            <meta name="keyword" content={this.props.appState.siteInfo.siteInfo.keyword}/>
            <meta name="description" content={this.props.appState.siteInfo.siteInfo.description}/>
          </Helmet>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topic'>Topic</Link>
          </li>
        </ul>
    )
  }

  _getSiteInfo = async () => {
    await this.props.appState.setSiteInfo()
  }
}

Header.loadData = async store => {
  await store.setSiteInfo()
}

export default Header
