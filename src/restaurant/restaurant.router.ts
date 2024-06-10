import { Hono } from "hono";
import { type Context } from "hono";
import { listrestaurant, getrestaurant, createrestaurant, updaterestaurant, deleterestaurant} from "./restaurant.controller"
import { zValidator } from "@hono/zod-validator";
import { restaurantSchema} from "../validators"


export const restaurantRouter = new Hono();

//get all restaurant     
restaurantRouter.get("/restaurant", listrestaurant);

//get a single restaurant    
restaurantRouter.get("/users/:id", getrestaurant)

// create a restaurant 
restaurantRouter.post("/users", zValidator('json', restaurantSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success? result.data : { error: 'Validation failed' }, result.success? 200 : 400);
    }
}), createrestaurant)

//update a restaurant
restaurantRouter.put("/users/:id", updaterestaurant)

restaurantRouter.delete("/users/:id", deleterestaurant)