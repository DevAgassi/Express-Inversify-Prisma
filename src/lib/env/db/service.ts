import { injectable } from 'inversify'
import mongoose from 'mongoose'
import DBServiceInterface from '@/types/DbServiceInterface'

import { UsersModel } from '@/modules/users/users.model'

@injectable()
export class Service {
  private _db: typeof mongoose

  async connect() {
    this._db = await mongoose.connect(process.env.DB_URI)
  }

  get user() {
    
    return this._db.model('User', UsersModel)
  }
}