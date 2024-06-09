import { Hono } from "hono";
import { type Context } from "hono";
import { getorderstatus, listorderstatus, createorderstatus, updateorderstatus, deleteorderstatus} from "./orderstatus.controller"
import { zValidator } from "@hono/zod-validator";


export const orderstatusRouter = new Hono();

//get all orderstatus      api/orderstatus
orderstatusRouter.get("/orderstatus", listorderstatus);

//get a single orderstatus    api/orderstatus/1
orderstatusRouter.get("/users/:id", getorderstatus)
// create a orderstatus 
orderstatusRouter.post("/orderstatus", zValidator('json', orderstatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createorderstatus)
//update a orderstatus
orderstatusRouter.put("/orderstatus/:id", updateorderstatus)

orderstatusRouter.delete("/orderstatus/:id", deleteorderstatus)