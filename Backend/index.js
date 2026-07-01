import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

const PORT = process.env.PORT || 7777;
const URI = process.env.MONGODB_URI;

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}

try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB:", error);
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});