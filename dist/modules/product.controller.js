"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Received request body:", req.body);
        const validation = product_validation_1.ProductValidation.createProductValidation.safeParse(req.body);
        if (!validation.success) {
            console.log("Validation failed:", validation.error.errors);
            return res.status(400).json(validation.error.errors);
        }
        const product = yield product_service_1.ProductServices.createProduct(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        console.error("Error in createProducts:", error);
        res.status(500).json({ error: error.message });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.ProductServices.getProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductServices.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = product_validation_1.ProductValidation.updateProductValidation.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json(validation.error.errors);
        }
        const product = yield product_service_1.ProductServices.updateProduct(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductServices.deleteProduct(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.productControllers = {
    createProducts,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
