import { Elysia } from "elysia"

export const router = new Elysia()
    .get('/', () => 'hello world!')