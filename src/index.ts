import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { usersRouter } from './users/users.router'
import { cityRouter } from './city/city.router'
// import { stateRouter } from './state/state.router'
import { Context } from 'hono'


const app = new Hono()

// default route
app.get('/kk', (c) => {
  return c.text('Hello Hono!')
})
app.route("/", usersRouter) 

// app.notFound((c) => {
//     return c.text("route Not Found",404)
// })

// custom route
app.route("/api", usersRouter)  //users
app.route("/",usersRouter)

// custom city
app.route("/", cityRouter)  
app.route("/",cityRouter)

// custom state
// app.route("/", stateRouter)  
// app.route("/",stateRouter)




console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
})
