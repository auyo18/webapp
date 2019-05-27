import React from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'

const Container = ({children}) => {
  return (
      <WingBlank size="lg">
        <WhiteSpace size="lg"/>
        <Card>
          <Card.Body>
            {
              children
            }
          </Card.Body>
        </Card>
      </WingBlank>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
      ]
  )
}

export default Container
