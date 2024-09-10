import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userroutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageroute from "./routes/messageRoutes.js";
import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend's URL
    credentials: true, // Allow cookies to be sent
  })
);
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

try {
  mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDb");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userroutes);
app.use("/api/message", messageroute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
