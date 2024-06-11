"use strict";
// import { Hono } from 'hono';
// import { register, login } from './auth.controller';
// import { authenticateToken } from '../middlewares/authentification.middleware';
// import { zValidator } from "@hono/zod-validator";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
// export const authRouter = new Hono();
// authRouter.post('/register', register);
// authRouter.post('/login', login);
// // Example of a protected route
// authRouter.get('/protected', authenticateToken, (c) => {
//   return c.json({ msg: 'This is a protected route' }, 200);
// });
const hono_1 = require("hono");
const auth_controller_1 = require("./auth.controller");
const validators_1 = require("../validators");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/register', zValidator('json', validators_1.registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.error.flatten().fieldErrors() : { message: 'Validation failed' }, 400);
    }
}), auth_controller_1.registerUser);
exports.authRouter.post('/login', zValidator('json', validators_1.loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.error.flatten().fieldErrors() : { message: 'Validation failed' }, 400);
    }
}), auth_controller_1.loginUser);
function zValidator(arg0, registerUserSchema, arg2) {
    throw new Error('Function not implemented.');
}
