import { injectable } from 'inversify'
import { UsersRepository } from './users.repository'

@injectable()
export class UsersService {
  constructor(private readonly _users: UsersRepository) {}

  async all() {
    return this._users.all()
  }

  async findOne(id: string) {
    return this._users.findOne(id)
  }

  async create(payload: any) {
    return this._users.create(payload)
  }

  async updateOne(id: string, payload: any) {
    const user = await this.findOne(id)

    return this._users.updateOne(user, payload)
  }

  async deleteOne(id: string) {
    return this._users.deleteOne(id)
  }
}