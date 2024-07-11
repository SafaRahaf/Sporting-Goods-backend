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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoutes_1 = require("./routes/productRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb+srv://safa-rahaf-assignment-4-user:safa-rahaf-assignment-4-user@safa-assignment-4.mgastkx.mongodb.net/?retryWrites=true&w=majority&appName=safa-assignment-4";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DB_URL, {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
                tlsAllowInvalidHostnames: true,
                tlsAllowInvalidCertificates: true,
            });
            console.log("Connected to MongoDB Atlas");
            app.listen(PORT, () => {
                console.log(`App listening on ${PORT}😃`);
            });
        }
        catch (err) {
            console.error("MongoDB connection error:", err);
        }
    });
}
app.use("/api", productRoutes_1.productRoutes);
app.get("/", (req, res) => {
    res.send("Hello to our sports app");
});
main();
