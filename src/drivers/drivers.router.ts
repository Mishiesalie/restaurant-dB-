import { Hono } from "hono";
import { type Context } from "hono";
import { listdrivers, getdriver, createdriver, updatedriver, deletedriver} from "./drivers.controller"
import { zValidator } from "@hono/zod-validator";
import { driverSchema } from "../validators"


export const driversRouter = new Hono();

//get all driver      
driversRouter.get("/drivers", listdrivers);

//get a single driver    
driversRouter.get("/driver/:id", getdriver)
// create a driver 
driversRouter.post("/driver", zValidator('json', driverSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createdriver)
//update a driver
driversRouter.put("/driver/:id", updatedriver)

driversRouter.delete("/driver/:id", deletedriver)
