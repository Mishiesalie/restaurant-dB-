import { Hono } from "hono";
import { type Context } from "hono";
import { liststatuscatalog, getstatusCatelog, createstatusCatelog, updatestatusCatelog, deletestatusCatelog} from "./statuscatalog.controller"
import { zValidator } from "@hono/zod-validator";
import { statusCatelogSchema } from "../validators";


export const statuscatalogRouter = new Hono();

//get all users      api/users
statuscatalogRouter.get("/statuscatalog", liststatuscatalog);

//get a single user    api/users/1
statuscatalogRouter.get("/users/:id", getstatusCatelog)
// create a user 
statuscatalogRouter.post("/users", zValidator('json', statusCatelogSchema, (result, c) => {
    if (!result.success) {
return c.json(result.success? result.data : { error: 'Validation failed' }, result.success? 200 : 400);
    }
}), createstatusCatelog)
//update a user
statuscatalogRouter.put("/users/:id", updatestatusCatelog)

statuscatalogRouter.delete("/users/:id", deletestatusCatelog)