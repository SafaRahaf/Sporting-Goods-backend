import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRoutes } from "./routes/productRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL =
  "mongodb+srv://safa-rahaf-assignment-4-user:safa-rahaf-assignment-4-user@safa-assignment-4.mgastkx.mongodb.net/?retryWrites=true&w=majority&appName=safa-assignment-4";

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(DB_URL, {
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
  }
}

app.use("/api", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello to our sports app");
});

main();
