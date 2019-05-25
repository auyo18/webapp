import fs from "fs"
import path from 'path'
import React from "react"
import {Provider, useStaticRendering} from "mobx-react"
import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from "react-router-config"
import routes from '../router/routes'

useStaticRendering(true)

export const render = (ctx, stores, context) => {
  const template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
  const html = renderToString(
      <Provider appState={stores}>
        <StaticRouter location={ctx.path} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  )
  return template.replace('<!-- app -->', html)
}
