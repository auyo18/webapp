import React from 'react'
import PropTypes from 'prop-types'
import {List} from 'antd-mobile'

const {Item} = List
const {Brief} = Item

const TopicListItem = ({onClick, topic}) => {
  return (
      <List onClick={onClick}>
        <Item thumb="https://avatars1.githubusercontent.com/u/22374024?v=4&s=120"/*{{topic.image}}*/>
          <Primary topic={topic}/>
          <Brief>
            <Secondary topic={topic}/>
          </Brief>
        </Item>
      </List>
  )
}

const Primary = ({topic}) => (
    <div>
      <span>{topic.tab}</span>
      <span>{topic.title}</span>
    </div>
)

const Secondary = ({topic}) => (
    <div>
      <span>{topic.username}</span>
      <span>
        <span>{topic.reply_count}</span>
        <span>/</span>
        <span>{topic.visit_count}</span>
      </span>
      <span>创建时间：{topic.create_at}</span>
    </div>
)

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
}

Primary.propTypes = {
  topic: PropTypes.object.isRequired
}

Secondary.propTypes = {
  topic: PropTypes.object.isRequired
}

export default TopicListItem
