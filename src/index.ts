import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
// import { usersRouter } from './users/users.router'
// import { cityRouter } from './city/city.router'
// import { stateRouter } from './state/state.router'
// import { categoryRouter } from './Category/category.router'
// import { restaurantRouter } from './restaurant/restaurant.router'
// import { restaurantownerRouter } from './restaurantowner/restaurantowner.router'

import { Context } from 'hono'
// import { driversRouter } from './drivers/drivers.router'
// import { ordersRouter } from './orders/orders.router'
// import { commentsRouter } from './comments/comments.router'
// import { menuItemsRouter } from './menuitems/menuitems.router'
// import { orderMenuItemRouter } from './ordermenuitems/ordermenuitems.router'
// import { addressRouter } from './address/address.router'
// import { statuscatalogRouter } from './statuscatalog/statuscatalog.router'
// import { orderstatusRouter } from './orderstatus/orderstatus.router'

import { usersRouter } from './users/users.router'
import { cityRouter } from './city/city.router'
import { stateRouter } from './state/state.router'
import { categoryRouter } from './Category/category.router'
import { restaurantRouter } from './restaurant/restaurant.router'
import { restaurantownerRouter } from './restaurantowner/restaurantowner.router'
import { driversRouter } from './drivers/drivers.router'
import { ordersRouter } from './orders/orders.router'
import { commentsRouter } from './comments/comments.router'
import { menuItemsRouter } from './menuitems/menuitems.router'
import { orderMenuItemRouter } from './ordermenuitems/ordermenuitems.router'
import { addressRouter } from './address/address.router'
import { statuscatalogRouter } from './statuscatalog/statuscatalog.router'
import { orderstatusRouter } from './orderstatus/orderstatus.router'

const app = new Hono().basePath('/api')

//... rest of the code




import "dotenv/config"
import { logger } from 'hono/logger'
import { csrf } from 'hono/csrf'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { timeout } from 'hono/timeout'
import { HTTPException } from 'hono/http-exception'
import { prometheus } from '@hono/prometheus'




// const app = new Hono().basePath('/api')

const customTimeoutException = () =>
  new HTTPException(408, {
    message: `Request timeout after waiting for more than 10 seconds`,
  })

const { printMetrics, registerMetrics } = prometheus()

// inbuilt middlewares
app.use(logger())  //logs request and response to the console
app.use(csrf()) //prevents CSRF attacks by checking request headers.
app.use(trimTrailingSlash()) //removes trailing slashes from the request URL
app.use('/', timeout(10000, customTimeoutException))
//3rd party middlewares
app.use('*', registerMetrics)







// const app = new Hono()

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


//custom drivers
app.route("/api",driversRouter)
app.route("/",driversRouter)


//custom orders
app.route("/api",ordersRouter)
app.route("/",ordersRouter)


//custom comments
app.route("/api",commentsRouter)
app.route("/",commentsRouter)


//custom menuitems
app.route("/api",menuItemsRouter)
app.route("/",menuItemsRouter)

//custom ordermenuitems
app.route("/api",orderMenuItemRouter)
app.route("/",orderMenuItemRouter)


// custom address
app.route("/api",addressRouter)
app.route("/",addressRouter)


// custom statuscatalog
app.route("/api",orderstatusRouter)
app.route("/",orderstatusRouter)


// custom statuscatalog
app.route("/api",statuscatalogRouter)
app.route("/",statuscatalogRouter)




console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
})
console.log(`Server is running on port ${process.env.PORT} `)
