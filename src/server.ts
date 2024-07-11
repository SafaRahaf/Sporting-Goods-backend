import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRoutes } from "./routes/productRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function main() {
  try {
    // @ts-ignore-next-line
    await mongoose.connect(process.env.DB_CONNECTION, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      tlsAllowInvalidHostnames: true,
      tlsAllowInvalidCertificates: true,
    } as any);

    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}😃`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw new Error("MongoDB connection error");
  }
}

app.use("/api", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello to our sports app");
});

main();
