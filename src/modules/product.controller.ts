import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidation } from "./product.validation";

const createProducts = async (req: Request, res: Response) => {
  try {
    console.log("Received request body:", req.body);
    const validation = ProductValidation.createProductValidation.safeParse(
      req.body
    );
    if (!validation.success) {
      console.log("Validation failed:", validation.error.errors);
      return res.status(400).json(validation.error.errors);
    }

    const product = await ProductServices.createProduct(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    console.error("Error in createProducts:", error);
    res.status(500).json({ error: error.message });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductServices.getProducts();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const validation = ProductValidation.updateProductValidation.safeParse(
      req.body
    );
    if (!validation.success) {
      return res.status(400).json(validation.error.errors);
    }

    const product = await ProductServices.updateProduct(
      req.params.id,
      req.body
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.deleteProduct(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const productControllers = {
  createProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
