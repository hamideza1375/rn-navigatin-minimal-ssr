
import 'ignore-styles'
import express from "express"
import fs from "fs"
import path from "path"

import { renderToString } from "react-dom/server"
import { Helmet } from 'react-helmet';
import { ServerContainer } from "@react-navigation/native"

import App from "../src/App"

const app = express();
const appRoot = (pathName) => path.join(__dirname, pathName)
const indexPath = appRoot("../build/index.html")

app.use(express.static(path.resolve('./', "build")));

app.use((req, res, next)=> {
  const location = new URL(req.url, 'http:localhost:3001')
  let html = renderToString(
    <ServerContainer location={location} >
      <App location={location} ssr/>
    </ServerContainer>
  )

  const helmet = Helmet.renderStatic()
  let index = fs.readFileSync(indexPath, "utf8")
  return res.send(
    index
      .replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root">${html}</div>`)
      .replace("</head>", `${helmet.meta.toString()}</head>`)
      .replace("</head>", `${helmet.script.toString()}</head>`)
      .replace("</head>", `${helmet.title.toString()}</head>`)
  )
})


app.listen(3001, () => { console.log("App is launched to port 3001") });

