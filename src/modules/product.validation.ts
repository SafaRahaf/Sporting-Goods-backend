import { z } from "zod";

const createProductValidation = z.object({
  // body: z.object({
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  stock: z.number({ required_error: "Stock is required" }),
  rating: z.number({ required_error: "Rating is required" }),
  price: z.number({ required_error: "Price is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  description: z.string({ required_error: "Description is required" }),
  image: z.string().optional(),
  // });
});
const updateProductValidation = z.object({
  // body: z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  stock: z.number().optional(),
  rating: z.number().optional(),
  price: z.number().optional(),
  brand: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  // });
});

export const ProductValidation = {
  createProductValidation,
  updateProductValidation,
};
