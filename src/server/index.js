import React from 'react'
import koa from 'koa'
import Static from 'koa-static'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import {render} from "./utils"

const app = new koa()

app.use(conditional())
app.use(etag())
app.use(Static('dist/static'))

app.use(async ctx => {
  ctx.body = render(ctx)
})

app.listen(3000)
