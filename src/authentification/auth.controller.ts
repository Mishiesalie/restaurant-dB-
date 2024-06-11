import { Context } from 'hono';
import "dotenv/config";
import { createloginService, LoginService } from "./auth.service";
import bycrpt from "bcrypt";
import { sign } from "hono/jwt";


export const registerUser = async (c: Context) => {
    try {
        const login = await c.req.json();
        const pass = login.password;
        const hashedPassword = await bycrpt.hash(pass, 10);
        login.password = hashedPassword;
        const createdUser = await createloginService(login);
        if (!createdUser) return c.text("login not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}
export const loginUser = async (c: Context) => {

    try {
        const login = await c.req.json();
        //check login exist
        const loginExist = await LoginService(login);
        if (loginExist === null) return c.json({ error: "login not found" }, 404);  // not found         
        const loginMatch = await bycrpt.compare(login.password, login?.password as string);
        if (!loginMatch) {
            return c.json({ error: "Invalid credentials" }, 401);  // unauthorized
        } else {
            // create a payload
            const payload = {
                sub: loginExist?.username,
                role: loginExist?.role,
                exp: Math.floor(Date.now() / 1000) + (60 * 180)  // 3 hour  => SESSION EXPIRATION
            }
            let secret = process.env.JWT_SECRET as string;  // secret key
            const token = await sign(payload, secret);   // create a JWT token
            let user = loginExist?.user;
            let role = loginExist?.role;
            return c.json({ token, user: { role, ...user } }, 200);  // return token and user details
        }
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}


// export const register = async (c: Context) => {
//     try {
//         const user = await c.req.json();
//         const message = await registerUser(user);
//         return c.json({ msg: message }, 201);
//     } catch (error: any) {
//         return c.json({ error: error.message }, 400);
//     }
// };

// export const login = async (c: Context) => {
//     try {
//         const { email, password } = await c.req.json();
//         const { token, user } = await loginUser(email, password);
//         return c.json({ token, user }, 200);
//     } catch (error: any) {
//         return c.json({ error: error.message }, 400);
//     }
// };
