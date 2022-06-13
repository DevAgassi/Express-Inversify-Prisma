import express from 'express'
import cors from 'cors'
import "reflect-metadata";

import { InversifyExpressServer } from 'inversify-express-utils'
const container = require('@/di-container')

class App {
    async setup() {
      //const _db = container.get(DBService)
  
      //await _db.connect()
  
      const server = new InversifyExpressServer(container)
  
      server.setConfig((app) => {
        app.use(express.json())
      })
  
      const app = server.build()

      app.use(cors())

      app.listen(process.env.PORT, () => {
        console.log(
          `server is running on http://localhost:${process.env.PORT}/subscribers`
        )
      })
    }
  }

export async function bootstrap() {
    console.log("bootstrap Application 👋")
  new App().setup()
}

console.clear()

bootstrap()