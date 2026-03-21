import express from "express";

import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/api", (_, res) => {
  res.json({ message: "API Running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
