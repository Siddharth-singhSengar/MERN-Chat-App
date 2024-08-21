import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()

dotenv.config()
const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI

try {
    mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDb");
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})