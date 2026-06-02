import express from "express";
import mongoose from "mongoose";

import financeRoutes from "@/modules/finance/finance.routes";

import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();
const api = express.Router();

app.use(express.json());

api.use("/finance", financeRoutes);
app.use("/api", api);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  });
