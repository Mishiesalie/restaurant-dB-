import { Hono } from "hono";
import { type Context } from "hono";
import { getorderstatus, listorderstatus, createorderstatus, updateorderstatus, deleteorderstatus} from "./orderstatus.controller"
// const { zValidator } = await import("@hono/zod-validator");
import { orderstatusSchema } from "../validators";

import { zValidator }  from "@hono/zod-validator";

// Now, use the imported function directly
zValidator('json', orderstatusSchema, (result, c) => {
    if (!result.success) {
        // Check if success is false before accessing error
        if ('error' in result) {
            return c.json(result.error, 400)
        } else {
            // Handle the case when success is true but error is missing
            return c.json({ message: 'Validation failed' }, 400)
        }
    }
});

export const orderstatusRouter = new Hono();

//get all orderstatus      api/orderstatus
orderstatusRouter.get("/orderstatus", listorderstatus);

//get a single orderstatus    api/orderstatus/1
orderstatusRouter.get("/users/:id", getorderstatus)
// create a orderstatus 
orderstatusRouter.post("/orderstatus", zValidator('json', orderstatusSchema, (result, c) => {
    if (!result.success) {
        // Check if success is false before accessing error
        if ('error' in result) {
            return c.json(result.error, 400)
        } else {
            // Handle the case when success is true but error is missing
            return c.json({ message: 'Validation failed' }, 400)
        }
    }
}), createorderstatus)
//update a orderstatus
orderstatusRouter.put("/orderstatus/:id", updateorderstatus)

orderstatusRouter.delete("/orderstatus/:id", deleteorderstatus)