import { Service as DBService } from '@/lib/env/db/service'
import { injectable } from 'inversify'

@injectable()
export class UsersRepository {
    constructor(private readonly _dbContext: DBService) {}

    async all() {
        return this._dbContext.user.find({})
      }

      async findOne(id: string) {
        return this._dbContext.user.findById(id)
      }
    
      async create({
        name
      }: {
        name: string
      }) {
        return this._dbContext.user.create({ name })
      }
    
      async updateOne(user: any, payload: any) {
        user.name = payload.name
    
        return user.save()
      }
    
      async deleteOne(id: string) {
        return this._dbContext.user.deleteOne({ _id: id })
      }
}