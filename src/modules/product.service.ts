import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const product = new Product(productData);
  return await product.save();
};

const getProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

const updateProduct = async (
  id: string,
  productData: Partial<IProduct>
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
