import { Hono } from "hono";
import { type Context } from "hono";
import { listrestaurantowner, getrestaurantowner, createrestaurantowner, updaterestaurantowner, deleterestaurantowner} from "./restaurantowner.controller"
import { zValidator } from "@hono/zod-validator";
import { restaurantownerSchema } from "../validators";


export const restaurantownerRouter = new Hono();

//get all restaurantowner      api/users
restaurantownerRouter.get("/restaurantowner", listrestaurantowner);

//get a single restaurantowner    api/users/1
restaurantownerRouter.get("/restaurantowner/:id", getrestaurantowner)
// create a restaurantowner 
restaurantownerRouter.post("/restaurantowner", zValidator('json', restaurantownerSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success? result.data : { error: 'Validation failed' }, result.success? 200 : 400);
    }
}), createrestaurantowner)
//update a restaurantowner
restaurantownerRouter.put("/restaurantowner/:id", updaterestaurantowner)

restaurantownerRouter.delete("/restaurantowner/:id", deleterestaurantowner)