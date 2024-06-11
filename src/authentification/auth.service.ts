import { Hono } from 'hono';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import  {db} from "../drizzle/db";
import { login_table,loginRelationsType, loginselect } from '../drizzle/schema';
import {eq} from 'drizzle-orm';

import { sql } from "drizzle-orm";

export const createloginService = async (login: loginRelationsType): Promise<string | null> => {
    await db.insert(login_table).values(login)
    return "login created successfully";
}

export const LoginService = async (login: loginRelationsType) => {
    const { username, password } = login;
    return await db.query.login_table.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: sql` ${login_table.username} = ${username}`,
        with: {
            user: {
                columns: {
                    name: true,
                    phone: true,
                    address: true,
                    id: true
                }
            }
        }
    })
}


// const secret = process.env.SECRET;
// const expiresIn = process.env.EXPIRES

// export const registerUser = async (user: userRelationsType) =>{
//     //check if the user already exists
//     const existingUser = await db.query.users_table.findFirst({
//         where: eq(users_table.email, user.email)
//     });

//     if (existingUser){
//         throw new Error('User already exists');
//     }

//     //Hash the password
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     await db.insert(users_table).values({...user, password: hashedPassword});
//     return 'User registered successfully';
// };


// export const loginUser = async(email: string, password: string) =>{
//     const user = await db.query.users_table.findFirst({
//         where: eq(users_table.email, email)
//     });
//     if(!user){
//         throw new Error('User not found');
//     }
//     const isPasswordValid = await bcrypt.compare(password,user.password);
//     if(!isPasswordValid){
//         throw new Error('Invalid password');
//     }
//     const token = jwt.sign({id: user.id, email: user.email}, secret!, {expiresIn});
//     return {token, user};
// };

// export const verifyToken = (token: string) => {
//     try {
//         return jwt.verify(token, secret!);
//     } catch (error) {
//         throw new Error('Invalid token');
//     }
// };

// import bcrypt from 'bcryptjs';
// import jwt from "jsonwebtoken";
// import  {db} from "../drizzle/db";
// import { Users,userRelationsType, userselect } from '../drizzle/schema';
// import {eq} from 'drizzle-orm';

// const secret = process.env.SECRET;
// const expiresIn = process.env.EXPIRES;

// export const registerUser = async (user: userRelationsType) =>{
//     //... rest of the code
// };

// export const loginUser = async(email: string, password: string) =>{
//     //... rest of the code
// };

// export const verifyToken = (token: string) => {
//     //... rest of the code
// };
