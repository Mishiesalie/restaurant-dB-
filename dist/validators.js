"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = exports.loginUserSchema = exports.addressSchema = exports.driverSchema = exports.menuItemSchema = exports.orderMenuItemSchema = exports.orderstatusSchema = exports.restaurantownerSchema = exports.restaurantSchema = exports.ordersSchema = exports.statusCatelogSchema = exports.stateSchema = exports.citySchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    contact_phone: zod_1.z.string(),
    phone_verified: zod_1.z.boolean(),
    email: zod_1.z.string(),
    email_verified: zod_1.z.boolean(),
    password: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string()
});
exports.citySchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    name: (0, zod_1.string)(),
    state_id: (0, zod_1.number)(),
    address: (0, zod_1.string)()
});
exports.stateSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    name: (0, zod_1.string)(),
    code: (0, zod_1.string)()
});
exports.statusCatelogSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    name: (0, zod_1.string)()
});
exports.ordersSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    user_id: (0, zod_1.number)(),
    restaurant_id: (0, zod_1.number)(),
    driver_id: (0, zod_1.number)(),
    delivery_address_id: (0, zod_1.number)(),
    coment: (0, zod_1.number)(),
    final_price: (0, zod_1.number)(),
    discount: (0, zod_1.number)(),
    estimated_delivery_time: (0, zod_1.number)(),
    price: (0, zod_1.number)(),
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.restaurantSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    name: (0, zod_1.string)(),
    street_address: (0, zod_1.string)(),
    city_id: (0, zod_1.number)(),
    zip_code: (0, zod_1.number)(),
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.restaurantownerSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    restaurant_id: (0, zod_1.number)(),
    owner_id: (0, zod_1.number)()
});
exports.orderstatusSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    order_id: (0, zod_1.number)(),
    status_catalog_id: (0, zod_1.number)(),
    created_at: (0, zod_1.string)()
});
exports.orderMenuItemSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    order_id: (0, zod_1.number)(),
    menu_item_id: (0, zod_1.number)(),
    quantity: (0, zod_1.number)(),
    item_price: (0, zod_1.number)(),
    price: (0, zod_1.number)(),
    comment: (0, zod_1.string)()
});
exports.menuItemSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    restaurant_id: (0, zod_1.number)(),
    name: (0, zod_1.string)(),
    description: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    category_id: (0, zod_1.number)(),
    ingredients: (0, zod_1.string)(),
    active: zod_1.z.boolean(),
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.driverSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    car_make: (0, zod_1.string)(),
    car_model: (0, zod_1.string)(),
    user_id: (0, zod_1.number)(),
    online: zod_1.z.boolean(),
    delivering: (0, zod_1.string)(),
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.addressSchema = zod_1.z.object({
    id: (0, zod_1.number)(),
    street_address_1: (0, zod_1.string)(),
    street_address_2: (0, zod_1.string)(),
    zip_code: (0, zod_1.string)(),
    delivering_instractions: (0, zod_1.string)(),
    city_id: (0, zod_1.number)(),
    user_id: (0, zod_1.number)(),
    created_at: (0, zod_1.string)(),
    updated_at: (0, zod_1.string)()
});
exports.loginUserSchema = zod_1.z.object({
    login_id: (0, zod_1.number)(),
    user_id: (0, zod_1.number)(),
    password: (0, zod_1.string)(),
    username: (0, zod_1.string)(),
    role: (0, zod_1.string)()
});
exports.registerUserSchema = zod_1.z.object({
    login_id: (0, zod_1.number)(),
    user_id: (0, zod_1.number)(),
    password: (0, zod_1.string)(),
    username: (0, zod_1.string)(),
    role: (0, zod_1.string)()
});
