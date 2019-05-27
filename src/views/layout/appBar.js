import React, {Component} from 'react'
import {NavBar, Button} from 'antd-mobile'

class AppBar extends Component {
  render() {
    return (
        <NavBar
            mode="dark"
            leftContent="Home"
            rightContent={[
              <Button type="warning" inline size="small" style={{marginRight: '10px'}} key="topic">新建话题</Button>,
              <Button type="warning" inline size="small" key="login">登录</Button>,
            ]}
        />
    )
  }
}

export default AppBar
