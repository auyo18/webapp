import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from "react-router-config"
import routes from '../router/routes'
import {Provider} from "mobx-react"
import appState from "../store"

const App = () => (
    <Provider appState={appState}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
)


ReactDom.hydrate(<App />, document.getElementById('root'))
