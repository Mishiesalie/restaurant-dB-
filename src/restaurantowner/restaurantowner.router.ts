import { Hono } from "hono";
import { type Context } from "hono";
import { listrestaurantowner} from "./restaurantowner.controller"
import { zValidator } from "@hono/zod-validator";


export const restaurantownerRouter = new Hono();

//get all users      api/users
restaurantownerRouter.get("/restaurantowner", listrestaurantowner);