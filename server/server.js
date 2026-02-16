import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/products.js";

import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: "*",
}));

app.use(express.json());

// ✅ THIS IS CRITICAL
app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});