// import { Hono } from 'hono';
// import { register, login } from './auth.controller';
// import { authenticateToken } from '../middlewares/authentification.middleware';

// export const authRouter = new Hono();

// authRouter.post('/register', register);
// authRouter.post('/login', login);

// // Example of a protected route
// authRouter.get('/protected', authenticateToken, (c) => {
//   return c.json({ msg: 'This is a protected route' }, 200);
// });

import { Hono } from 'hono'
import { registerUser, loginUser } from './auth.controller'
import { registerUserSchema, loginUserSchema } from '../validators'
import { ZodObject, ZodNumber, ZodString, ZodTypeAny } from 'zod';

export const authRouter = new Hono();



authRouter.post('/register', zValidator('json', registerUserSchema, (result, c) => {
  if (!result.success) {
      return c.json(result.success? result.error.flatten().fieldErrors() : { message: 'Validation failed' }, 400)
  }
}), registerUser)

authRouter.post('/login', zValidator('json', loginUserSchema, (result, c) => {
  if (!result.success) {
      return c.json(result.success? result.error.flatten().fieldErrors() : { message: 'Validation failed' }, 400)
  }
}), loginUser)

function zValidator(arg0: string, registerUserSchema: ZodObject<{ login_id: ZodNumber; user_id: ZodNumber; password: ZodString; username: ZodString; role: ZodString; }, "strip", ZodTypeAny, { login_id?: number; user_id?: number; password?: string; username?: string; role?: string; }, { login_id?: number; user_id?: number; password?: string; username?: string; role?: string; }>, arg2: (result: any, c: any) => any): import("hono/types").H<import("hono/types").BlankEnv, any, import("hono/types").BlankInput, any> {
  throw new Error('Function not implemented.');
}
