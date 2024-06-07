import { Hono } from "hono";
import { type Context } from "hono";
import { listrestaurant} from "./restaurant.controller"
import { zValidator } from "@hono/zod-validator";


export const restaurantRouter = new Hono();

//get all users      api/users
restaurantRouter.get("/restaurant", listrestaurant);