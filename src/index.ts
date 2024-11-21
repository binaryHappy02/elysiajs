import { Elysia } from "elysia"
import { swagger } from '@elysiajs/swagger'
import { router } from './routers'

// config
import selectedConfig from '@/config/config.app'

const {
  app: { port }
} = selectedConfig

const app = new Elysia()

// router 분리
app.use(router)

// swagger
app.use(swagger({
  path: '/v1/swagger',
  documentation: {
    info: {
      title: 'Backend Bun Js Documentation!!',
      version: '1.0.0',
    },
  }
}))

app.listen(port, () => {
  console.info(
    `🦊 Elysia is running att ${app.server?.hostname}:${app.server?.port}`,
  )
})