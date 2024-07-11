"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../modules/product.controller");
const router = express_1.default.Router();
router.post("/products", product_controller_1.productControllers.createProducts);
router.get("/products", product_controller_1.productControllers.getProducts);
router.get("/products/:id", product_controller_1.productControllers.getProductById);
router.put("/products/:id", product_controller_1.productControllers.updateProduct);
router.delete("/products/:id", product_controller_1.productControllers.deleteProduct);
exports.productRoutes = router;
