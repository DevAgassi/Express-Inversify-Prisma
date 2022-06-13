import { Container } from 'inversify'
import { Service as DBService } from './lib/env/db/service'
import { UsersRepository } from './modules/users/users.repository'
import { UsersService } from './modules/users/users.service'

export const container = new Container({
  defaultScope: 'Singleton',
})

container.bind(DBService).toSelf()
container.bind(UsersRepository).toSelf()
container.bind(UsersService).toSelf()