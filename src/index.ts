import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { usersRouter } from './users/users.router'
import { cityRouter } from './city/city.router'
import { stateRouter } from './state/state.router'
import { categoryRouter } from './Category/category.router'
import { restaurantRouter } from './restaurant/restaurant.router'
import { restaurantownerRouter } from './restaurantowner/restaurantowner.router'

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
app.route("/api", cityRouter)  
app.route("/",cityRouter)

// custom state
app.route("/api", stateRouter)  
app.route("/",stateRouter)


// custom category
app.route("/api", categoryRouter)  
app.route("/",categoryRouter)


//custom restaurant
app.route("/api", restaurantRouter)  
app.route("/",restaurantRouter)

//custom restaurantowner
app.route("/api", restaurantownerRouter)  
app.route("/",restaurantownerRouter)




console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
})
