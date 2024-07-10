import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export const Product = mongoose.model("Product", productSchema);
