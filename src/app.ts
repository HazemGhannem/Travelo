import express from "express";
import connectDB from "./config/db";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routers/auth.router";


connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from TypeScript + Express!");
});

app.use(errorHandler); // Must be after routes

export default app;
