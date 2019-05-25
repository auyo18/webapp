import React from 'react'
import koa from 'koa'
import Static from 'koa-static'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import {render} from "./utils"
import {createStoreMap} from "../store/store"

const app = new koa()

const appState = createStoreMap()

app.use(conditional())
app.use(etag())
app.use(Static('dist/static'))

app.use(async ctx => {
  ctx.body = render(ctx, appState, {})
})

app.listen(3000)
