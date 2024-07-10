import express from "express";
import { productControllers } from "../modules/product.controller";

const router = express.Router();

router.post("/products", productControllers.createProducts);
router.get("/products", productControllers.getProducts);
router.get("/products/:id", productControllers.getProductById);
router.put("/products/:id", productControllers.updateProduct);
router.delete("/products/:id", productControllers.deleteProduct);

export const productRoutes = router;
