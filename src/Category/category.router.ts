import { Hono } from "hono";
import { type Context } from "hono";
import { listcategory} from "./category.controller"
import { zValidator } from "@hono/zod-validator";


export const categoryRouter = new Hono();

//get all users      api/users
categoryRouter.get("/category", listcategory);