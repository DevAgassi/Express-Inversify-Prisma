import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from '../di-container'
import { Service as DBService } from '@/lib/env/db/service'

export default class App {
    async setup() {
      const _db = container.get(DBService)
      console.log(_db)
      await _db.connect()

      const server = new InversifyExpressServer(container)
  
      server.setConfig((app) => {
        app.use(express.json()),
        app.use(bodyParser.urlencoded({
          extended: true
        })),
        app.use(cors())
      })
  
      const app = server.build()

      app.listen(process.env.APP_PORT, () => {
        console.log(
          `server is running on http://${process.env.APP_HOST}:${process.env.APP_PORT}/users`
        )
      })
    }
  }