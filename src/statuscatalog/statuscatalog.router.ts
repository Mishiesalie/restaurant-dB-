import { Hono } from "hono";
import { type Context } from "hono";
import { liststatuscatalog} from "./statuscatalog.controller"
import { zValidator } from "@hono/zod-validator";


export const statuscatalogRouter = new Hono();

//get all users      api/users
statuscatalogRouter.get("/statuscatalog", liststatuscatalog);