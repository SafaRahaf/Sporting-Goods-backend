"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post("/products", controller_1.productControllers.createProducts);
router.get("/products", controller_1.productControllers.getProducts);
router.put("/products/:id", controller_1.productControllers.updateProduct);
router.delete("/products/:id", controller_1.productControllers.deleteProduct);
exports.productRoutes = router;
