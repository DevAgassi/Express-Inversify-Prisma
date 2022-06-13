import { Request, Response } from 'express'
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
  httpDelete,
} from 'inversify-express-utils'
import { UsersService } from './users.service'

@controller('/subscribers')
export class SubscribersController {
  constructor(private readonly _service: UsersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const subscribers = await this._service.all()
    res.json({
      data: {
        subscribers,
      },
    })
  }
}