import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import locationRoute from "./routes/location.routes.js";
configDotenv();

const PORT = process.env.PORT || 1338;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.status(200).json({ data: "Server running..." });
});
app.use("/api/v1/locations", locationRoute);
app.listen(PORT, () => {
  console.log(`Server running...\nURL: http://localhost:${PORT}`);
});
