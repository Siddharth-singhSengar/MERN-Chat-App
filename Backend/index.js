import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userroutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageroute from "./routes/messageRoutes.js"
import { app, server} from "./Socketio/server.js"
import cors from "cors"

import path from 'path'; 



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

//----deployment---//
if(process.env.NODE_ENV === "production"){
  const dirPath = path.resolve();

  app.use(express.static("./Frontend/dist"));
  app.get("*",(req,res) =>{
    res.sendFile(path.resolve(dirPath, "./Frontend/dist","index.html"))
  })
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
