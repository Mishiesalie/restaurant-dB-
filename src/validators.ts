import { boolean } from 'drizzle-orm/pg-core'
import { number, string, z } from 'zod'


export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    contact_phone: z.string(),
    phone_verified: z.boolean(),
    email: z.string(),
    email_verified: z.boolean(),
    password: z.string(),
    created_at: z.string(),
    updated_at: z.string()
    
})

export const citySchema = z.object({
    id: number(),
    name: string(),
    state_id: number(),
    address: string()

})

export const stateSchema = z.object({
    id: number(),
    name: string(),
    code: string()
})

export const statusCatelogSchema = z.object({
    id: number(),
    name: string()
})

export const ordersSchema = z.object({
    id: number(),
    user_id: number(),
    restaurant_id: number(),
    driver_id: number(),
    delivery_address_id: number(),
    coment: number(),
    final_price: number(),
    discount: number(),
    estimated_delivery_time: number(),
    price: number(),
    created_at: string(),
    updated_at: string()
})

export const restaurantSchema = z.object({
    id: number(),
    name: string(),
    street_address: string(),
    city_id: number(),
    zip_code: number(),
    created_at: string(),
    updated_at: string()
})

export const restaurantownerSchema = z.object({
    id: number(),
    restaurant_id: number(),
    owner_id: number()


})


export const orderstatusSchema = z.object({
    id: number(),
    order_id: number(),
    status_catalog_id: number(),
    created_at: string()
})


export const orderMenuItemSchema = z.object({
    id: number(),
    order_id: number(),
    menu_item_id: number(),
    quantity: number(),
    item_price: number(),
    price: number(),
    comment: string()
    
})


export  const menuItemSchema = z.object({
    id: number(),
    restaurant_id: number(),
    name: string(),
    description: string(),
    price: number(),
    category_id: number(),
    ingredients: string(),
    active: z.boolean(),
    created_at: string(),
    updated_at: string()

})


   