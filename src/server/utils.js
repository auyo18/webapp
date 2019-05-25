import fs from "fs"
import path from 'path'
import React from "react"
import {Provider} from "mobx-react"
import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from "react-router-config"
import routes from '../router/routes'
import appState from '../store'

export const render = () => {
  const template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
  const html = renderToString(
      <Provider appState={appState}>
        <StaticRouter>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  )
  return template.replace('<!-- app -->', html)
}
