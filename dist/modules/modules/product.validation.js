"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductValidation = zod_1.z.object({
    // body: z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    category: zod_1.z.string({ required_error: "Category is required" }),
    stock: zod_1.z.number({ required_error: "Stock is required" }),
    rating: zod_1.z.number({ required_error: "Rating is required" }),
    price: zod_1.z.number({ required_error: "Price is required" }),
    brand: zod_1.z.string({ required_error: "Brand is required" }),
    description: zod_1.z.string({ required_error: "Description is required" }),
    image: zod_1.z.string().optional(),
    // });
});
const updateProductValidation = zod_1.z.object({
    // body: z.object({
    title: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    stock: zod_1.z.number().optional(),
    rating: zod_1.z.number().optional(),
    price: zod_1.z.number().optional(),
    brand: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    // });
});
exports.ProductValidation = {
    createProductValidation,
    updateProductValidation,
};
