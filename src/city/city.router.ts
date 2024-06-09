import { Hono } from "hono";
import { type Context } from "hono";
import { deletecity, listcity, updatecity, getcity, createcity, } from "./city.controller"
import { zValidator } from "@hono/zod-validator";
import { citySchema } from "../validators";


export const cityRouter = new Hono();

//get all city
cityRouter.get("/city", listcity);


//get a single city    

cityRouter.get("/city/:id", getcity)

// create a city 
cityRouter.post("/city", zValidator('json', citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createcity)

//update a city
cityRouter.put("/users/:id", updatecity)


cityRouter.delete("/users/:id", deletecity)