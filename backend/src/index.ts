import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userid: string
  }
}>()



app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
  

export default app

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZWIyYmExNTYtMTRhNS00MzU4LWEwZTYtODMwMTUzNzE2MTQzIiwidGVuYW50X2lkIjoiMDRmMDgzYzM3OWNkNDU2YjZmY2ZhMmI2MDNiYTQ2MDE0N2E5MjdiMTU2N2RmODVkMTE3MDVkOWI0MmI5ZmY3ZiIsImludGVybmFsX3NlY3JldCI6IjkxN2JjYzU2LWFkY2ItNDQ3YS1iZDA0LTQxMWVlNmZmY2NjNyJ9.uRpNPZQMy2qy-6FVAskNjbVwlKs3PUexjOQlURvl86c"