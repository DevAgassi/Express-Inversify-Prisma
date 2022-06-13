import { Request, Response } from 'express'
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
  httpDelete,
} from 'inversify-express-utils'
import { UsersService } from './users.service'

@controller('/users')
export class UsersController {
  constructor(private readonly _service: UsersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const users = await this._service.all()
    res.json({
      data: {
        users,
      },
    })
  }

  @httpGet('/:id')
  async show(req: Request, res: Response) {
    const user = await this._service.findOne(req.params.id)

    res.json({
      data: {
        user,
      },
    })
  }

  @httpPost('/')
  async store(req: Request, res: Response) {
    const user = await this._service.create(req.body)

    res.sendStatus(201).json({
      data: {
        user,
      },
    })
  }

  @httpPatch('/:id')
  async update(req: Request, res: Response) {
    const updatedUser = await this._service.updateOne(
      req.params.id,
      req.body
    )

    res.json({
      data: {
        subscriber: updatedUser,
      },
    })
  }

  @httpDelete('/:id')
  async destroy(req: Request, res: Response) {
    console.log(req.params)
    await this._service.deleteOne(req.params.id)

    res.sendStatus(204)
  }
}