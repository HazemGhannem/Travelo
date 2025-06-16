import express from "express";
import connectDB from "./config/db";
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from TypeScript + Express!");
});

export default app;
