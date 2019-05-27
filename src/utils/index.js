import fs from "fs"
import path from 'path'
import React from "react"
import {Provider, useStaticRendering} from "mobx-react"
import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from "react-router-config"
import {Helmet} from 'react-helmet'
import routes from '../router/routes'

useStaticRendering(true)

export const render = (ctx, store, context) => {
  let template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
  const reactDom = renderToString(
      <Provider appState={store}>
        <StaticRouter location={ctx.path} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
  )
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  const script = `<script>window.__STATE__ = ${JSON.stringify(store)}</script>`
  template = template.replace('<!-- title -->', title)
  template = template.replace('<!-- meta -->', meta)
  template = template.replace('<!-- app -->', reactDom)
  template = template.replace('<!-- script -->', script)
  return template
}
