import React, {Component} from 'react'
import {observer, inject} from "mobx-react"
import PropTypes from 'prop-types'
import {Tabs} from 'antd-mobile'
import AppState from '../../store/appState'
import Container from '../layout/container'
import TopicListItem from './listItem'

@inject('appState') @observer

class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {title: '全部'},
        {title: '分享'},
        {title: '工作'},
        {title: '问答'},
        {title: '精品'},
        {title: '测试'}
      ]
    }
  }

  render() {
    return (
        <Container>
          <Tabs
              tabs={this.state.tabs}
              onChange={(tab, index) => {
                console.log('onChange', index, tab)
              }}>
          </Tabs>
          <TopicListItem onClick={this.listItemClick}
                         topic={{title: 'this is title', username: 'JaMie', reply_count: 20, visit_count: 30,create_at:'20190527',tab:'share'}}/>
          <TopicListItem onClick={this.listItemClick}
                         topic={{title: 'this is title', username: 'JaMie', reply_count: 20, visit_count: 30,create_at:'20190527',tab:'share'}}/>
        </Container>
    )
  }

  listItemClick = () => {
    console.log('listItemClick')
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default TopicList
