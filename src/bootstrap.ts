import 'dotenv/config'
import 'reflect-metadata'
import App from './http/application'

import '@/modules/users/users.controller'

export async function bootstrap() {
  console.log("bootstrap Application 👋")
  new App().setup()
}

console.clear()

bootstrap() 