"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
// import { driversRouter } from './drivers/drivers.router'
// import { ordersRouter } from './orders/orders.router'
// import { commentsRouter } from './comments/comments.router'
// import { menuItemsRouter } from './menuitems/menuitems.router'
// import { orderMenuItemRouter } from './ordermenuitems/ordermenuitems.router'
// import { addressRouter } from './address/address.router'
// import { statuscatalogRouter } from './statuscatalog/statuscatalog.router'
// import { orderstatusRouter } from './orderstatus/orderstatus.router'
const users_router_1 = require("./users/users.router");
const city_router_1 = require("./city/city.router");
const state_router_1 = require("./state/state.router");
const category_router_1 = require("./Category/category.router");
const restaurant_router_1 = require("./restaurant/restaurant.router");
const restaurantowner_router_1 = require("./restaurantowner/restaurantowner.router");
const drivers_router_1 = require("./drivers/drivers.router");
const orders_router_1 = require("./orders/orders.router");
const comments_router_1 = require("./comments/comments.router");
const menuitems_router_1 = require("./menuitems/menuitems.router");
const ordermenuitems_router_1 = require("./ordermenuitems/ordermenuitems.router");
const address_router_1 = require("./address/address.router");
const statuscatalog_router_1 = require("./statuscatalog/statuscatalog.router");
const orderstatus_router_1 = require("./orderstatus/orderstatus.router");
const app = new hono_1.Hono().basePath('/api');
//... rest of the code
require("dotenv/config");
const logger_1 = require("hono/logger");
const csrf_1 = require("hono/csrf");
const trailing_slash_1 = require("hono/trailing-slash");
const timeout_1 = require("hono/timeout");
const http_exception_1 = require("hono/http-exception");
const auth_router_1 = require("./authentification/auth.router");
// const app = new Hono().basePath('/api')
const customTimeoutException = () => new http_exception_1.HTTPException(408, {
    message: `Request timeout after waiting for more than 10 seconds`,
});
const { printMetrics, registerMetrics } = prometheus();
// inbuilt middlewares
app.use((0, logger_1.logger)()); //logs request and response to the console
app.use((0, csrf_1.csrf)()); //prevents CSRF attacks by checking request headers.
app.use((0, trailing_slash_1.trimTrailingSlash)()); //removes trailing slashes from the request URL
app.use('/', (0, timeout_1.timeout)(10000, customTimeoutException));
//3rd party middlewares
app.use('*', registerMetrics);
// default route
app.get('/ok', (c) => {
    return c.text('The server is running📢😏😏😏!');
});
app.get('/timeout', async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 11000));
    return c.text("data after 5 seconds", 200);
});
app.get('/metrics', printMetrics);
// custom route
app.route("/", users_router_1.usersRouter); // api/users
app.route("/", city_router_1.cityRouter); // api/city
app.route("/", address_router_1.addressRouter);
app.route("/", state_router_1.stateRouter);
app.route("/", category_router_1.categoryRouter);
app.route("/", restaurant_router_1.restaurantRouter);
app.route("/", restaurantowner_router_1.restaurantownerRouter);
app.route("/", drivers_router_1.driversRouter);
app.route("/", orders_router_1.ordersRouter);
app.route("/", comments_router_1.commentsRouter);
app.route("/", menuitems_router_1.menuItemsRouter);
app.route("/", ordermenuitems_router_1.orderMenuItemRouter);
app.route("/", address_router_1.addressRouter);
app.route("/", statuscatalog_router_1.statuscatalogRouter);
app.route("/", auth_router_1.authRouter); // api/auth/register   or api/auth/login
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
// const app = new Hono()
// default route
app.get('/kk', (c) => {
    return c.text('Hello Hono!');
});
app.route("/", users_router_1.usersRouter);
// app.notFound((c) => {
//     return c.text("route Not Found",404)
// })
// custom route
app.route("/api", users_router_1.usersRouter); //users
app.route("/", users_router_1.usersRouter);
// custom city
app.route("/api", city_router_1.cityRouter);
app.route("/", city_router_1.cityRouter);
// custom state
app.route("/api", state_router_1.stateRouter);
app.route("/", state_router_1.stateRouter);
// custom category
app.route("/api", category_router_1.categoryRouter);
app.route("/", category_router_1.categoryRouter);
//custom restaurant
app.route("/api", restaurant_router_1.restaurantRouter);
app.route("/", restaurant_router_1.restaurantRouter);
//custom restaurantowner
app.route("/api", restaurantowner_router_1.restaurantownerRouter);
app.route("/", restaurantowner_router_1.restaurantownerRouter);
//custom drivers
app.route("/api", drivers_router_1.driversRouter);
app.route("/", drivers_router_1.driversRouter);
//custom orders
app.route("/api", orders_router_1.ordersRouter);
app.route("/", orders_router_1.ordersRouter);
//custom comments
app.route("/api", comments_router_1.commentsRouter);
app.route("/", comments_router_1.commentsRouter);
//custom menuitems
app.route("/api", menuitems_router_1.menuItemsRouter);
app.route("/", menuitems_router_1.menuItemsRouter);
//custom ordermenuitems
app.route("/api", ordermenuitems_router_1.orderMenuItemRouter);
app.route("/", ordermenuitems_router_1.orderMenuItemRouter);
// custom address
app.route("/api", address_router_1.addressRouter);
app.route("/", address_router_1.addressRouter);
// custom statuscatalog
app.route("/api", orderstatus_router_1.orderstatusRouter);
app.route("/", orderstatus_router_1.orderstatusRouter);
// custom statuscatalog
app.route("/api", statuscatalog_router_1.statuscatalogRouter);
app.route("/", statuscatalog_router_1.statuscatalogRouter);
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT) || 3000
});
console.log(`Server is running on port ${process.env.PORT} `);
function prometheus() {
    throw new Error('Function not implemented.');
}
