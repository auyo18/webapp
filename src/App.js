import React from 'react'
import {renderRoutes} from 'react-router-config'
import AppBar from "./views/layout/appBar"

const App = props => {
  return (
      <div>
        <AppBar/>
        {
          renderRoutes(props.route.routes)
        }
      </div>
  )
}

export default App
