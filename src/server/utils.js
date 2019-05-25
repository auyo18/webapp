import fs from "fs"
import path from 'path'
import {renderToString} from "react-dom/server"
import App from "../App"
import React from "react"

export const render = () => {
  const template = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')
  const html = renderToString(<App />)
  return template.replace('<!-- app -->', html)
}
