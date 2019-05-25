import React from 'react'
import {renderRoutes} from 'react-router-config'

const App = props => {
  return (
      <div>
        <p>header</p>
        {
          renderRoutes(props.route.routes)
        }
      </div>
  )
}

export default App
