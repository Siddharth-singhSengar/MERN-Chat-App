import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userroutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageroute from "./routes/messageRoutes.js"
import cors from "cors"
import { app, server } from "./SocketIO/server.js";



dotenv.config();                 
app.use(express.json());
app.use(cookieParser())
app.use(cors())
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

try {
  mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDb");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userroutes);
app.use("/api/message", messageroute)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
