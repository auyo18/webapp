import React from 'react'
import {matchRoutes} from "react-router-config"
import koa from 'koa'
import Static from 'koa-static'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import {render} from "../utils"
import {getState} from "../store/store"
import routes from '../router/routes'

const app = new koa()

const appState = getState()

app.use(conditional())
app.use(etag())
app.use(Static('dist/static'))

app.use(async ctx => {
  const matchedRoutes = matchRoutes(routes, ctx.path)

  for (let i = 0, len = matchedRoutes.length; i < len; i++) {
    let matchedRoute = matchedRoutes[i]
    matchedRoute.route.loadData && await matchedRoute.route.loadData(appState)
  }
  ctx.body = render(ctx, appState, {})
})

app.listen(3000)
